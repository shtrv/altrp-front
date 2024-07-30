def getUrlsForUpdate(): #В связи с изменение ссылки для получения списка обновлений с сайта ФНС Изменил код для данной Функции, далее см по коду  25.07.2024 Каюков С.И.
        fullVersion = garFrame.fullVersion
        urls = []
        zeepVer = dict()
        geoVer = []
        # Получение URL через сервис ФНС
        try:

            response = requests.get(garFrame.garWebServiceWSDL) #выполняем запрос по HTTP к веб-сервису
            response.raise_for_status() #проверка выполнения запроса 
            allFilesArr = response.json() #преобразуем данные в формат json и присваем в переменную allFilesArr
           
        except Exception as e:
            garFrame.writeLog(
                f"INSERT INTO geoGAR.dbo.updateLog (evntType, Event, versionId) VALUES (1, "
                f"'При попытке получить информацию об обновлениях от сервиса ФНС произошла ошибка: {e}', 11111111)")
            pass
           

        # Формируем словарь версий, полученных службой ФНС
        for i, file_info in enumerate(allFilesArr): # Цикл представляющий собой словарь, содержащий данные об одном файле
            try:
                zv = file_info.get('VersionId') # Извлекаем значение по ключу
                zu = file_info.get('GarXMLDeltaURL') # Извлекаем значение по ключу
                if zv and zu: 
                    zeepVer[zv] = zu # Создаем словарь в котором VersionId ключ, а GarXMLDeltaURL значение
            except Exception as e:
                continue
            if i >= 19: # И так 20 раз...
                break

        # Формируем массив версий, установленных в базу
        dbc = DataBaseConn()
        dbc.crsrgeo.execute("SELECT versionId FROM geoGAR.dbo.fiasVersion ORDER BY versionDate DESC ")
        for r in dbc.crsrgeo:
            geoVer.append(int(r[0]))

        if len(zeepVer) > 0:
            # Получаем необходимые URL неустановленных версий
            for key in zeepVer:
                if key not in geoVer and key > fullVersion:
                    urls.append(zeepVer.get(key))