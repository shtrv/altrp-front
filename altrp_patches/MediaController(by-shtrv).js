"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Media_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Media"));
const empty_1 = __importDefault(require("../../../../helpers/empty"));
const base_path_1 = __importDefault(require("../../../../helpers/path/base_path"));
const fs_1 = __importDefault(require("fs"));
const is_array_1 = __importDefault(require("../../../../helpers/is_array"));
const CategoryObject_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/CategoryObject"));
const image_size_1 = __importDefault(require("image-size"));
const heic_convert_1 = __importDefault(require("heic-convert"));
const xml2js_1 = require("xml2js");
const data_get_1 = __importDefault(require("../../../../helpers/data_get"));
const guid_1 = __importDefault(require("../../../../helpers/guid"));
const public_path_1 = __importDefault(require("../../../../helpers/path/public_path"));
const Logger_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Logger"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const LIKE_1 = __importDefault(require("../../../../helpers/const/LIKE"));
const transliterate_1 = require("../../../../helpers/transliterate");
class MediaController {
    async index({ response, request }) {
        const params = request.qs();
        const page = parseInt(params.page) || 1;
        const pageSize = parseInt(params.pageSize) || 20;
        const searchWord = params.s;
        let media;
        const mediaToUpdate = await Media_1.default.query().whereNull("guid").select("*");
        await Promise.all(mediaToUpdate.map(async (m) => {
            m.guid = (0, guid_1.default)();
            await m.save();
            Logger_1.default.info(`Media id ${m.id} guid write!`);
        }));
        let query = Media_1.default.query().whereNull("deleted_at");
        let categories = params.categories;
        let type = params.type;
        if (!categories) {
            categories = [];
        }
        else {
            categories = categories.split(",");
        }
        if (type) {
            if (type === "other") {
                query.where((query) => {
                    query.where("type", type).orWhereNull("type");
                });
            }
            else {
                query.where("type", type);
            }
        }
        if (!(0, empty_1.default)(categories)) {
            query
                .leftJoin("altrp_category_objects", "altrp_category_objects.object_guid", "=", "altrp_media.guid")
                .whereIn("altrp_category_objects.category_guid", categories);
        }
        let count;
        let pageCount = 1;
        if (pageSize && page) {
            media = await query
                .orderBy("id", "desc")
                .select("altrp_media.*")
                .preload("categories")
                //.where("title", LIKE_1.default, `%${searchWord}%`) //MAJOR
                .paginate(page, pageSize);
            count = media.getMeta().total;
            pageCount = media.getMeta().last_page;
            media = await media.all().map((model) => {
                if (fs_1.default.existsSync(Application_1.default.publicPath(model.url))) {
                    let stats = fs_1.default.statSync(Application_1.default.publicPath(model.url));
                    let item = {
                        id: model.id,
                        author: model.author,
                        width: model.width,
                        height: model.height,
                        filename: model.filename,
                        url: model.url,
                        media_type: model.media_type,
                        type: model.type,
                        title: model.title,
                        alternate_text: model.alternate_text,
                        caption: model.caption,
                        description: model.description,
                        main_color: model.main_color,
                        guest_token: model.guest_token,
                        guid: model.guid,
                        created_at: model.created_at,
                        updated_at: model.updated_at,
                        media_variation: model.media_variation,
                        categories: model.categories,
                        size: MediaController.readableSize(stats.size),
                    };
                    return item;
                }
                return model.serialize();
            });
        }
        else {
            media = await query
                .orderBy("id", "desc")
                .select("altrp_media.*")
                .preload("categories");
            count = media.length;
            media = media.map((model) => {
                return model.serialize();
            });
        }
        return response.json({
            count,
            pageCount,
            media,
        });
    }
    async getById({ params, response }) {
        const id = params.id;
        let media;
        const mediaToUpdate = await Media_1.default.query()
            .where("id", "=", id)
            .whereNull("guid")
            .select("*");
        await Promise.all(mediaToUpdate.map(async (m) => {
            m.guid = (0, guid_1.default)();
            await m.save();
            Logger_1.default.info(`Media id ${m.id} guid write!`);
        }));
        let query = Media_1.default.query().where("id", "=", id).whereNull("deleted_at");
        let categories = params.categories;
        let type = params.type;
        if (!categories) {
            categories = [];
        }
        else {
            categories = categories.split(",");
        }
        if (type) {
            if (type === "other") {
                query.where((query) => {
                    query.where("type", type).orWhereNull("type");
                });
            }
            else {
                query.where("type", type);
            }
        }
        if (!(0, empty_1.default)(categories)) {
            query
                .leftJoin("altrp_category_objects", "altrp_category_objects.object_guid", "=", "altrp_media.guid")
                .whereIn("altrp_category_objects.category_guid", categories);
        }
        media = await query
            .orderBy("id", "desc")
            .select("altrp_media.*")
            .preload("categories");
        media = media.map((model) => {
            return model.serialize();
        });
        media = media[0];
        return response.json(media);
    }
    async updateMedia({ response, request }) {
        const id = request.all().id;
        const mediaToUpdate = await Media_1.default.find(id);
        if (!mediaToUpdate) {
            response.status(404);
            return response.json({
                success: false,
                message: "Media not found",
            });
        }
        try {
            mediaToUpdate.merge(request.all());
            await mediaToUpdate.save();
        }
        catch (e) {
            console.error(e);
        }
        return response.json(mediaToUpdate);
    }
    static getFileTypes() {
        if (!MediaController.fileTypes) {
            let fileTypes = fs_1.default.readFileSync((0, base_path_1.default)("config/file-types.json"), {
                encoding: "utf8",
            });
            fileTypes = JSON.parse(fileTypes);
            MediaController.fileTypes = fileTypes;
        }
        return MediaController.fileTypes;
    }
    static getTypeForFile(file) {
        let extensionLoaded = file.extname.split(".").pop();
        let type = "";
        let file_types = MediaController.getFileTypes();
        for (let file_type of file_types) {
            if (!type && file_type.extensions.indexOf(extensionLoaded) !== -1) {
                type = file_type.name;
            }
        }
        if (!type) {
            type = "other";
        }
        return type;
    }
    async store({ response, request, auth }) {  //��� ���������� ������ � �����, ���� ������� ���������
        const user = auth.user;
        if (!user) {
            return response
                .status(403)
                .json({ success: false, message: "not allowed" });
        }
        const files = request.allFiles().files || [];
        let res = [];
        for (let file of files) {
            if (!file) {
                continue;
            }
            const ext = file.extname.split(".").pop();
            let media = new Media_1.default();
            media.media_type = file.type || "";
            media.author = user.id;
            media.type = MediaController.getTypeForFile(file);
            media.guid = (0, guid_1.default)();
            const date = new Date();
            let title = file.clientName.split(".");
            title.pop();
            title = title.join('');
            title = (0, transliterate_1.transliterate)(title);
            title = title + '_' + (new Date().valueOf());
            title = title.substring(0, 36);
            let filename = title + "." + ext;
            media.title = filename;
            let urlBase = "/media/" + date.getFullYear() + "/" + (date.getMonth() + 1) + "/";
            let dirname = ("/storage" + urlBase);
            if (!fs_1.default.existsSync((0, public_path_1.default)(dirname))) {
                fs_1.default.mkdirSync((0, public_path_1.default)(dirname), { recursive: true });
            }
            media.filename = urlBase + filename;
            await file.moveToDisk('storage' + urlBase, { name: filename }, "local");
            let content = fs_1.default.readFileSync((0, public_path_1.default)(dirname + filename));
            if (ext == "heic") {
                media.title = file.clientName.split(".")[0] + ".jpg";
                media.media_type = "image/jpeg";
                media.type = "image";
                content = (0, heic_convert_1.default)({
                    buffer: content,
                    format: "JPEG",
                    quality: 1,
                });
                fs_1.default.writeFileSync((0, public_path_1.default)(dirname + filename), content);
            }
            if (ext === "svg") {
                let svg = content;
                svg = (0, xml2js_1.parseString)(svg);
                media.width = (0, data_get_1.default)(svg, "$.width", 150);
                media.height = (0, data_get_1.default)(svg, "$.height", 150);
            }
            else {
                let dimensions;
                try {
                    dimensions = (0, image_size_1.default)(content);
                }
                catch (e) { }
                media.width = (0, data_get_1.default)(dimensions, "width", 0);
                media.height = (0, data_get_1.default)(dimensions, "height", 0);
            }
            media.main_color = "";
            media.url = "/storage" + urlBase + filename;
            await media.save();
            const categories = request.input("_categories");
            if ((0, is_array_1.default)(categories) && categories.length > 0 && media.guid) {
                let insert = [];
                for (let category of categories) {
                    insert.push({
                        category_guid: category["value"],
                        object_guid: media.guid,
                        object_type: "Media",
                    });
                }
                await CategoryObject_1.default.createMany(insert);
            }
            res.push(media);
        }
        res = res.reverse();
        return response.json(res);
    }
    async store_from_frontend({ response, request, auth }) {  //��� ���������� ������ � �����, ���� ������� ���������
        console.log('functionstart22');
        const user = auth.user;
        const files = request.allFiles().files || [];
        let res = [];
        for (let file of files) {
            if (!file) {
                continue;
            }
            const ext = file.extname.split(".").pop();
            let media = new Media_1.default();
            media.title = file.clientName;
            media.media_type = file.type || "";
            if (user) {
                media.author = user.id;
            }
            else {
                media.guest_token = request.csrfToken;
            }
            media.type = MediaController.getTypeForFile(file);
            media.guid = (0, guid_1.default)();
            const date = new Date();
            let title = file.clientName.split(".");
            title.pop();
            title = title.join();
            title = (0, transliterate_1.transliterate)(title);
            title = title + '_' + (new Date().valueOf());
            title = title.substring(0, 36);
            let filename = title + "." + ext;
            let urlBase = "/media/" + date.getFullYear() + "/" + (date.getMonth() + 1) + "/";
            let dirname = ("/storage" + urlBase);
            if (!fs_1.default.existsSync((0, public_path_1.default)("/storage" + urlBase))) {
                fs_1.default.mkdirSync((0, public_path_1.default)("/storage" + urlBase), { recursive: true });
            }
            media.filename = urlBase + filename;
            console.log('popitka3');
            await file.moveToDisk(dirname, { name: filename }, "local");
            console.log('popitka4');
            let content = fs_1.default.readFileSync((0, public_path_1.default)(dirname + filename));
            if (ext == "heic") {
                media.title = file.clientName.split(".")[0] + ".jpg";
                media.media_type = "image/jpeg";
                media.type = "image";
                content = (0, heic_convert_1.default)({
                    buffer: content,
                    format: "JPEG",
                    quality: 1,
                });
                fs_1.default.writeFileSync((0, public_path_1.default)(dirname + filename), content);
            }
            if (ext === "svg") {
                let svg = content;
                svg = (0, xml2js_1.parseString)(svg);
                media.width = (0, data_get_1.default)(svg, "$.width", 150);
                media.height = (0, data_get_1.default)(svg, "$.height", 150);
            }
            else {
                let dimensions;
                try {
                    dimensions = (0, image_size_1.default)(content);
                }
                catch (e) { }
                media.width = (0, data_get_1.default)(dimensions, "width", 0);
                media.height = (0, data_get_1.default)(dimensions, "height", 0);
            }
            media.main_color = "";
            media.url = "/storage" + urlBase + filename;
            await media.save();
            const categories = request.input("_categories");
            if ((0, is_array_1.default)(categories) && categories.length > 0 && media.guid) {
                let insert = [];
                for (let category of categories) {
                    insert.push({
                        category_guid: category["value"],
                        object_guid: media.guid,
                        object_type: "Media",
                    });
                }
                await CategoryObject_1.default.createMany(insert);
            }
            res.push(media);
        }
        res = res.reverse();
        return response.json(res);
    }
    async showFull({ params }) {
        const media = await Media_1.default.query()
            .where("id", parseInt(params.id))
            .firstOrFail();
        const serialized = media.serialize();
        const stats = fs_1.default.statSync(Application_1.default.publicPath(media.url));
        serialized.filesize = await MediaController.readableSize(stats.size);
        return serialized;
    }
    static readableSize(size) {
        let mb = size / (1024 * 1024);
        let unit = 'Mb';
        if (mb < 1) {
            mb = mb * 1024;
            unit = 'Kb';
        }
        const isFloat = !Number.isInteger(mb);
        if (isFloat) {
            mb = mb.toFixed(2);
        }
        let filesize = mb + " " + unit;
        return filesize;
    }
    async show({ params, response }) {
        const path = `/storage/media/${params.year}/${params.month}/${params.name}`;
        let file;
        if (fs_1.default.existsSync(Application_1.default.publicPath(path))) {
            file = fs_1.default.readFileSync(Application_1.default.publicPath(path));
        }
        if (!file) {
            const media = await Media_1.default.query().where("url", path).first();
            if (media) {
                response.header("custom-label", media.title);
            }
            return file;
        }
        else {
            response.status(404);
            return {
                message: "file not found",
            };
        }
    }
    async destroy({ params, response }) {
        const media = await Media_1.default.find(params.id);
        if (!media) {
            return response
                .status(404)
                .json({ success: false, message: "Media not found" });
        }
        let filename = (0, public_path_1.default)("/storage" + media.filename);
        if (fs_1.default.existsSync(filename)) {
            fs_1.default.rmSync(filename);
        }
        await media?.delete();
        return response.json({ success: true });
    }
    async destroy_from_frontend({ params, response, request, auth, }) {
        const { id } = params;
        const media = await Media_1.default.find(parseInt(id));
        if (!media) {
            response.status(404);
            return response.json({ success: false, message: "Media not found" });
        }
        const user = auth.user;
        if (!user && request.csrfToken !== media.guest_token) {
            response.status(403);
            return response.json({
                success: false,
                message: "Not Access to deleting media",
            });
        }
        if (user && !user.hasRole("admin") && user.id !== media.author) {
            response.status(403);
            return response.json({
                success: false,
                message: "Not Access to deleting media",
            });
        }
        let filename = (0, public_path_1.default)("/storage" + media.filename);
        if (fs_1.default.existsSync(filename)) {
            fs_1.default.rmSync(filename);
        }
        await media.delete();
        return response.json({ success: true });
    }
}
exports.default = MediaController;
