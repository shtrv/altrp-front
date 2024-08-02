async function(context)
{
    const fs = require('fs');
    const path = require('path');
    const startPath = `/mnt/win_share/Архив группа нового строительства/ДОГОВОРЫ АРЕНДЫ/Сканы ДА_ДС/Сканы ДА/ДОГОВОРЫ ${context.request_all.year}/`;
    if (await fs.existsSync(startPath)){
        var files = fs.readdirSync(startPath);
        context.files = [];
        for (var i = 0; i < files.length; i++) {
            var filename = path.join(startPath, files[i]);
            if (filename.indexOf(context.request_all.filter) >= 0){
                var stat = fs.lstatSync(filename);
                if (stat.isDirectory()) {
                    var inFiles = fs.readdirSync(filename);
                    for (var ii = 0; ii < inFiles.length; ii++) {
                        var inFilename = path.join(filename, inFiles[ii]);
                        stat = fs.lstatSync(inFilename);
                        if (stat.isFile() && !inFilename.endsWith('.db')){
                            context.files.push({idx: context.files.length + 1 + ')&nbsp;', path:inFilename, file: path.basename(inFilename)});
                        }
                    }
                }
                else {
                    context.files.push({idx: context.files.length + 1 + ')&nbsp;', path:filename, file: path.basename(filename)});
                }
            }
        };
    }
}


