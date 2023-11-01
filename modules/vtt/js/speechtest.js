function voiceToText(setting) {
    // ========== ASIGN  ID ===============
    _id_modalInfo = "__draft_result"
    _id_indicatorRecord = "__indicator_recording"
    _id_textareaConverter = "__convert_text"
    _id_buttonRecord = "__click_to_convert"
    // ========== ASIGN  ID ===============

    // ======== SETTING ============
    showDefaultButton = true
    // ======== SETTING ============

    if(setting != undefined){
        if(setting.defaultButton != undefined){
            showDefaultButton = setting.defaultButton
            console.log(setting)
        }
        if(setting.customeButton != undefined){
            _id_buttonRecord = setting.customeButton
            console.log(setting.customeButton)
        }
    }


    // ==========================================
    let modalInfo = document.createElement(`div`)
    modalInfo.id = _id_modalInfo
    modalInfo.style.display = "none"

    let indicatorRecord = document.createElement(`div`)
    indicatorRecord.id = _id_indicatorRecord
    indicatorRecord.style.display = "none"
    indicatorRecord.innerHTML = "&#10022; Recording"

    let textareaConverter = document.createElement(`textarea`)
    textareaConverter.id = _id_textareaConverter
    
    let buttonRecord = document.createElement(`button`)
    buttonRecord.id = _id_buttonRecord
    buttonRecord.innerHTML = "Voice To Text"

    document.getElementById("vtt").appendChild(modalInfo);
    document.getElementById("vtt").appendChild(indicatorRecord);
    document.getElementById("vtt").appendChild(textareaConverter);
    if(showDefaultButton){
        document.getElementById("vtt").appendChild(buttonRecord);
    }
    // ========================================

    // ========================================
    __modal_info_id = document.getElementById(_id_modalInfo)
    __indicator_record_id = document.getElementById(_id_indicatorRecord)
    __textarea_converter_id = document.getElementById(_id_textareaConverter)
    __button_record_id = document.getElementById(_id_buttonRecord)
    // ========================================

    result = []
    draft = ""
    startSpeech = false

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
        __modal_info_id.innerHTML = transcript
        draft = transcript
    })

    __button_record_id.addEventListener('click', function () {
        if (startSpeech) {
            __indicator_record_id.style.display = "none"
            __button_record_id.innerHTML = "Voice To Text"
            __button_record_id.style.background = "#0ea4da"
            recognition.stop();
        } else {
            __indicator_record_id.style.display = "block"
            __button_record_id.innerHTML = "STOP: Voice To Text"
            __button_record_id.style.background = "red"
            recognition.start();
        }
        startSpeech = !startSpeech
    })

    __modal_info_id.addEventListener("change", function () {
        console.log("DRAFT BERUBAH")
    })

    recognition.addEventListener('end', function () {
        result.push(draft[0])
        draft.length = 0;
        if (startSpeech == true) {
            recognition.start();
            setTimeout(function () {
                __modal_info_id.style.display = "none"
            }, 2000)
        }

        let arr = [result.join(" ")]
        var cleanedArray = arr.map(function (item) {
            return item.replace(/\s+/g, ' ').trim();
        });

        __textarea_converter_id.innerHTML = cleanedArray[0]
    });

    let observe = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList' && mutation.target === __modal_info_id) {
                __modal_info_id.style.display = "block"
            }
        })
    })

    let config = { childList: true };

    observe.observe(__modal_info_id, config)
    return
}