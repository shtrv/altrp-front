  altrpHelpers.getCurrentStoreState().elements.forEach(function(e){
        var el = e.elementRef.current;
        if (!el)
            return;
		//console.log(el.elementName)
        if (el.elementName == 'input-text-autocomplete'){
            //Отключаем браузерный автокомплит для автокомплита 
            var input = e.elementWrapperRef.current.getElementsByTagName('input')[0];
            input.setAttribute('autocomplete', 'off');
            input.setAttribute('autocorrect', 'off');
        }
        if (el.elementName == 'input-text-common' && e.settings.content_type == 'number'){
            //Числовому полю делаем числовую клавиатуру 
            var input = e.elementWrapperRef.current.getElementsByTagName('input')[0];
            input.setAttribute('pattern', '[0-9]*');
        }
        else if (el.elementName == 'input-text-common'){
            //Превращаем в календарь, если в плейсхолдере указано 'дд.мм.гггг' или 'дд.мм.гггг --:--'
            var input = e.elementWrapperRef.current.getElementsByTagName('input')[0];
            if (input.placeholder.toLowerCase() == 'дд.мм.гггг'){
                input.setAttribute('type', 'date');
				if (el.state.settings.mask_mismatch_message == 'NO') //Если в validatin указано NO, то нет ограничений на дате
					;
				else if (input.placeholder.lastIndexOf('д') > 0)
					input.setAttribute('max', (new Date()).toLocaleString('sv').substring(0, 10));
				else if (input.placeholder.lastIndexOf('Д') > 0){
					input.setAttribute('min', (new Date()).toLocaleString('sv').substring(0, 10));
					input.setAttribute('max', '9999-01-01');
				}
            }
            else if (input.placeholder.toLowerCase() == 'дд.мм.гггг --:--'){
                input.setAttribute('type', 'datetime-local');
				if (el.state.settings.mask_mismatch_message == 'NO')
					;
				else if (input.placeholder.lastIndexOf('д') > 0)
					input.setAttribute('max', (new Date()).toLocaleString('sv').replace(' ', 'T').substring(0, 16));
				else if (input.placeholder.lastIndexOf('Д') > 0){
					input.setAttribute('min', (new Date()).toLocaleString('sv').replace(' ', 'T').substring(0, 16));
					input.setAttribute('max', '9999-01-01T00:00');
				}    
            }        
        }
    });