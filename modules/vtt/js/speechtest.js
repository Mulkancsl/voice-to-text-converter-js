// AUTHOR: mulkancsl95@gmail.com

function voiceToText(setting) {
    const subjek = ['Alergi terhadap hewan', 'Eksim', 'Nyeri otot', 'Kesulitan berkonsentrasi', 'Terapi tertentu yang pernah dijalani', 'Vertigo', 'Riwayat keluarga dengan penyakit kanker', 'Diare kronis', 'Alergi terhadap serbuk sari', 'Penurunan nafsu makan', 'Paparan radiasi', 'Alergi terhadap gigitan serangga', 'Rambut rontok', 'Buang air besar tidak teratur', 'Riwayat infeksi', 'Merokok', 'Gangguan keseimbangan', 'Riwayat keluarga dengan penyakit diabetes', 'Nyeri dada', 'Riwayat keluarga dengan penyakit ginjal', 'Nyeri sendi', 'Riwayat keluarga dengan penyakit asma', 'Lesi', 'Cedera tertentu yang pernah dialami', 'Riwayat keluarga dengan penyakit hipertensi', 'Disfagia', 'Riwayat penyakit tertentu di masa lalu', 'Diare', 'Gangguan pendengaran', 'Alergi terhadap bahan kimia', 'Alkohol', 'Inkontinensia urin', 'Riwayat keluarga dengan penyakit hati', 'Gangguan bicara', 'BAK tidak lancar', 'BAB berdarah', 'Dermatitis', 'Stres', 'Acne', 'Vitiligo', 'Diet yang tidak sehat', 'Luka', 'Pruritus', 'Perubahan warna kulit', 'BAK berdarah', 'Nyeri perut', 'Urtikaria', 'Alergi terhadap makanan', 'Riwayat keluarga dengan stroke', 'Alergi terhadap gigitan hewan', 'Sakit kepala', 'Gangguan gait', 'Anuria', 'Nyeri buang air kecil', 'Hematemesis', 'Trauma tertentu yang pernah dialami', 'Ruam', 'Gatal-gatal', 'Gangguan penglihatan', 'Palpebra edema', 'Mual dan muntah persisten', 'Kesemutan', 'Nyeri wajah', 'Perubahan pola tidur', 'Paparan zat kimia berbahaya', 'Ruam', 'Mual dan muntah', 'Kurang olahraga', 'Hematuria', 'Regurgitasi', 'Riwayat keluarga dengan penyakit autoimun', 'Sesak napas', 'Batuk', 'Alergi terhadap sinar matahari', 'Diplopia', 'Penurunan berat badan', 'Perut kembung', 'Obat-obatan terlarang', 'Demam', 'Obat-obatan yang sedang dikonsumsi', 'Perubahan suasana hati', 'Riwayat keluarga dengan penyakit alergi', 'Riwayat keluarga dengan penyakit jantung', 'Melena', 'Kelelahan', 'Operasi tertentu yang pernah dijalani', 'Lemah', 'Pusing', 'Gangguan kognitif', 'Oliguria', 'Kebas', 'Psoriasis', 'Paparan polusi udara', 'Konstipasi', 'Bisul', 'Alergi terhadap cuaca', 'Telangiektasia', 'Alergi terhadap obat-obatan', 'Tremor', 'Kejang']
    const objek = ['Ahli Bedah', 'Intervensi', 'Penyakit Saluran Pencernaan', 'Penyakit Pernapasan', 'Penyakit Ginjal', 'Penggunaan Alat Medis', 'Pemberian Obat', 'Resonansi Magnetik(MRI)', 'Hasil Laboratorium', 'Penyakit Kedokteran Gigi', 'Spesialisasi', 'Penyakit Tulang', 'Rehabilitasi', 'RekamMedis', 'Penyakit Kedokteran Dalam', 'Pemeriksaan Tinja', 'Ultrasonografi(USG)', 'Riwayat Penyakit Keluarga', 'Hasil Radiologi', 'Endoskopi', 'Terapi Cairan', 'Efek Samping Obat', 'Penyakit Diabetes', 'Ahli Pulmonologi', 'Rujukanke Ahli', 'Ahli Nefrologi', 'Diagnosis', 'Dosis Obat', 'Ahli Onkologi', 'Diet', 'Penyakit Ginekologi', 'Pemeriksaan Eosinofil', 'Penyakit Kedokteran Radiologi', 'Ahli Reumatologi', 'Pemeriksaan Feses', 'Penyakit THT(Telinga,Hidung,Tenggorokan)', 'Penyakit', 'Evaluasi Respons Terapi', 'Pengobatan', 'Riwayat Merokok', 'Penyakit Darah', 'Radiografi Dada', 'Gula Darah', 'Riwayat Alergi', 'Tindak Lanjut', 'Perawatan', 'Ahli Hematologi', 'Tekanan Darah', 'Anamnesis', 'Prosedur Medis', 'Kultur Bakteri', 'Ahli Endokrinologi', 'Penyakit Kedokteran Anestesiologi', 'Riwayat Alkohol', 'Penyakit Neurologis', 'Pemeriksaan Fisik', 'Elektrokardiogram(EKG)', 'Penyakit Hati', 'Ahli Anestesiologi', 'Penyakit Kanker', 'Penyakit Infeksi', 'Tindakan Medis', 'Keluhan', 'Ahli Psikiatri', 'Ahli Ginekologi', 'Operasi', 'Penyakit Kedokteran Psikiatri', 'Riwayat Imunisasi', 'Penyakit Urologi', 'Pemeriksaan Darah Lengkap', 'Penyakit Kulit', 'Penyakit Kedokteran Bedah', 'Tomografi Komputer(CT)', 'Organ Tubuh', 'Suhu Tubuh', 'Pemeriksaan Lanjutan', 'Biopsi', 'Penyakit Jantung', 'Rujukan', 'Pasien', 'Penatalaksanaan', 'Kreatinin', 'Perubahan Kondisi', 'Pembedahan', 'Penyakit Mata', 'Skor Tanda Vital', 'Rekomendasi', 'Pemeriksaan Urine', 'Detak Jantung', 'Histopatologi', 'Ahli Gastroenterologi', 'Ahli Kardiologi', 'Ahli Kedokteran Gigi', 'Gejala Klinis', 'Ahli Radiologi', 'Riwayat Medis', 'Penyakit Autoimun', 'Pemeriksaan TSH(ThyroidStimulatingHormone)', 'Respirasi', 'Observasi']
    const assessmen = ["Riwayat medis", "Pemeriksaan fisik", "Gejala", "Keluhan pasien", "Riwayat penyakit", "Hasil laboratorium", "Radiologi", "Pemeriksaan darah", "Diagnosa", "Analisis klinis", "Penyakit dalam", "Pencitraan medis", "Endoskopi", "Kolonoskopi", "Endoskopi lambung", "Pemeriksaan jantung", "Hasil CT scan", "Evaluasi medis", "Pemeriksaan radiologi", "Diagnosis banding", "Alergi obat", "Kondisi medis", "Infeksi", "Penyakit autoimun", "Sistem pencernaan", "Penyakit hati", "Pankreatitis", "Divertikulitis", "Polip usus", "Gastroenteritis", "Kolesistitis", "Malabsorpsi", "Iskemia usus", "Kanker usus besar", "Gastroesophageal Reflux Disease (GERD)", "Gagal jantung", "Aritmia", "Angina", "Infark miokard", "Hipertensi", "Aterosklerosis", "Penyakit vaskular", "Kolesterol tinggi", "Diabetes", "Trombosis", "Perdarahan", "Pemeriksaan tinja", "Ultrasonografi", "Dispepsia", "Terapi nutrisi", "Terapi farmakologis", "Diet khusus", "Pencegahan", "Perawatan jangka panjang", "Komplikasi", "Tumor perut", "Manajemen nyeri", "Rehabilitasi jantung", "Tatalaksana medis", "Perawatan kardiologi", "Penyakit pembuluh darah", "Operasi jantung", "Laparoskopi", "Usia lanjut", "Kanker pencernaan", "Masalah pencernaan", "Pencegahan kambuh", "Kolon", "Terapi rehabilitasi", "Kondisi serius", "Gangguan sistemik", "Penyakit autoimun", "Esofagitis", "Peradangan usus", "Pemantauan berkala", "Gastroenterologi", "Peradangan lambung", "Tukak lambung", "Gagal ginjal", "Aneurisma aorta", "Peritonitis", "Resiko kesehatan", "Pemulihan pasien", "Prognosis", "Kualitas hidup", "Rekomendasi perawatan", "Manajemen penyakit", "Pencegahan kesehatan", "Pemberian obat", "Pemeriksaan psikologis", "Kondisi kronis", "Pola makan", "Respon terapi", "Peran keluarga", "Pemahaman pasien", "Psikoterapi", "Rujukan spesialis", "Kebutuhan pasien", "Masalah sosial", "Perencanaan tindak lanjut"]
    const plan = ['Pemantauan gula darah', 'Edukasi perawat', 'Pencegahan kambuh', 'Perawatan penyakit pankreas', 'Manajemen alergi obat', 'Pemberian obat', 'Rencana diet rendah gula', 'Tindak lanjut', 'Diet dan nutrisi', 'Manajemen kanker pencernaan', 'Penggunaan obat antibiotik', 'Perawatan jangka panjang', 'Terapi nutrisi parenteral', 'Terapi radioterapi', 'Rencana nutrisi bayi', 'Pemantauan kadar kolesterol', 'Perawatan anak-anak', 'Pengawasan kesehatan berkala', 'Pemantauan kesehatan', 'Terapi fisik untuk pasien lansia', 'Pemulihan paska operasi', 'Perencanaan tindak lanjut', 'Perencanaan diet rendah karbohidrat', 'Rencana pengendalian infeksi', 'Terapi radioterapi kanker pencernaan', 'Konseling pasien', 'Terapi fisik', 'Rencana perawatan stroke', 'Perencanaan nutrisi anak-anak', 'Program penghentian merokok', 'Program pemantauan diri', 'Perencanaan diet rendah garam', 'Pemulihan pasien', 'Perawatan penyakit autoimun', 'Konseling diet', 'Perawatan luka', 'Edukasi pasien diabetik', 'Pemberian vaksin', 'Perawatan penyakit lambung', 'Manajemen berat badan', 'Manajemen kesehatan tubuh', 'Perawatan penyakit kronis', 'Perawatan kesehatan mental', 'Terapi medis', 'Infus intravena', 'Rencana diet vegetarian', 'Rencana diet rendah sodium', 'Kebutuhan psikologis', 'Pemeriksaan berkala', 'Manajemen nyeri', 'Terapi hormonal', 'Olahraga teratur', 'Pemeriksaan kesehatan tahunan', 'Manajemen stres', 'Pencegahan jatuh', 'Perencanaan nutrisi orang tua', 'Perawatan peradangan usus', 'Pengawasan gula darah', 'Tes laboratorium', 'Manajemen penyakit autoimun', 'Manajemen nutrisi enteral', 'Manajemen komplikasi', 'Pemantauan gizi', 'Terapi farmakologis', 'Tindakan rehabilitasi', 'Perubahan gaya hidup', 'Kebutuhan oksigen', 'Pencegahan penyakit autoimun', 'Perencanaan diet rendah kolesterol', 'Terapi penyakit autoimun', 'Pencegahan', 'Rencana perawatan diet remaja', 'Perawatan penyakit hati', 'Manajemen penyakit sistemik', 'Rekomendasi perawatan', 'Pemulihan paska stroke', 'Pencegahan penyakit hati', 'Rencana kepatuhan', 'Program diet sehat', 'Edukasi pasien', 'Perencanaan nutrisi balita', 'Perawatan penyakit lambung', 'Perawatan lanjut usia', 'Konsultasi spesialis', 'Pencegahan gangguan pencernaan', 'Manajemen penyakit pencernaan', 'Pemantauan asupan kalori', 'Terapi psikologis', 'Pencegahan penyakit gastrointestinal', 'Perawatan penyakit jantung', 'Diet khusus', 'Edukasi keluarga', 'Pemeriksaan radiologi', 'Pencegahan penyakit vaskular', 'Terapi fisik kardiak']


    // ========== ASIGN  ID ===============
    _id_modalInfo = "__draft_result"
    _id_indicatorRecord = "__indicator_recording"
    _id_textareaConverterSpeech = "__convert_text_speech"
    _id_textareaConverter = "__convert_text"
    _id_textareaConverter2 = "__convert_text2"
    _id_textareaConverter3 = "__convert_text3"
    _id_textareaConverter4 = "__convert_text4"
    _id_buttonRecord = "__click_to_convert"
    // ========== ASIGN  ID ===============

    // ======== SETTING ============
    showDefaultButton = true
    // ======== SETTING ============

    if (setting != undefined) {
        if (setting.defaultButton != undefined) {
            showDefaultButton = setting.defaultButton
            console.log(setting)
        }
        if (setting.customeButton != undefined) {
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

    let textareaConverterSpeech = document.createElement(`textarea`)
    textareaConverterSpeech.id = _id_textareaConverterSpeech

    let textareaConverter = document.createElement(`textarea`)
    textareaConverter.id = _id_textareaConverter
    let textareaConverter2 = document.createElement(`textarea`)
    textareaConverter2.id = _id_textareaConverter2
    let textareaConverter3 = document.createElement(`textarea`)
    textareaConverter3.id = _id_textareaConverter3
    let textareaConverter4 = document.createElement(`textarea`)
    textareaConverter4.id = _id_textareaConverter4

    let headSpeech = document.createElement(`h3`)
    headSpeech.innerHTML = "Speech"
    headSpeech.className = "head-label"

    let head = document.createElement(`h3`)
    head.innerHTML = "Subjek"
    head.className = "head-label"
    let head2 = document.createElement(`h3`)
    head2.innerHTML = "Objek"
    head2.className = "head-label"
    let head3 = document.createElement(`h3`)
    head3.innerHTML = "Assessmen"
    head3.className = "head-label"
    let head4 = document.createElement(`h3`)
    head4.innerHTML = "Plan"
    head4.className = "head-label"

    let buttonRecord = document.createElement(`button`)
    buttonRecord.id = _id_buttonRecord
    buttonRecord.innerHTML = "Voice To Text"

    document.getElementById("vtt").appendChild(modalInfo);
    document.getElementById("vtt").appendChild(indicatorRecord);

    document.getElementById("vtt").appendChild(headSpeech);
    document.getElementById("vtt").appendChild(textareaConverterSpeech);

    document.getElementById("vtt").appendChild(head);
    document.getElementById("vtt").appendChild(textareaConverter);
    document.getElementById("vtt").appendChild(head2);
    document.getElementById("vtt").appendChild(textareaConverter2);
    document.getElementById("vtt").appendChild(head3);
    document.getElementById("vtt").appendChild(textareaConverter3);
    document.getElementById("vtt").appendChild(head4);
    document.getElementById("vtt").appendChild(textareaConverter4);
    if (showDefaultButton) {
        document.getElementById("vtt").appendChild(buttonRecord);
    }
    // ========================================

    // ========================================
    __modal_info_id = document.getElementById(_id_modalInfo)
    __indicator_record_id = document.getElementById(_id_indicatorRecord)

    __textarea_converter_speech_id = document.getElementById(_id_textareaConverterSpeech)

    __textarea_converter_id = document.getElementById(_id_textareaConverter)
    __textarea_converter_id2 = document.getElementById(_id_textareaConverter2)
    __textarea_converter_id3 = document.getElementById(_id_textareaConverter3)
    __textarea_converter_id4 = document.getElementById(_id_textareaConverter4)
    __button_record_id = document.getElementById(_id_buttonRecord)
    // ========================================

    result = []
    draft = ""
    startSpeech = false
    matchingSubjek = [];
    matchingObjek = [];
    matchingAssessmen = [];
    matchingPlan = [];

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
        // console.log("DRAFT BERUBAH")
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

        __textarea_converter_speech_id.innerHTML = cleanedArray[0]

        for (var i = 0; i < subjek.length; i++) {
            if (cleanedArray[0].toLowerCase().includes(subjek[i].toLowerCase())) {
                matchingSubjek.push(subjek[i]);
                matchingSubjek = matchingSubjek.filter((value, index, self) => self.indexOf(value) === index)
                __textarea_converter_id.innerHTML = matchingSubjek
                console.log(matchingSubjek)
            }
        }

        for (var i = 0; i < objek.length; i++) {
            if (cleanedArray[0].toLowerCase().includes(objek[i].toLowerCase())) {
                matchingObjek.push(objek[i]);
                matchingObjek = matchingObjek.filter((value, index, self) => self.indexOf(value) === index)
                __textarea_converter_id2.innerHTML = matchingObjek
                console.log(matchingObjek)
            }
        }

        for (var i = 0; i < assessmen.length; i++) {
            if (cleanedArray[0].toLowerCase().includes(assessmen[i].toLowerCase())) {
                matchingAssessmen.push(assessmen[i]);
                matchingAssessmen = matchingAssessmen.filter((value, index, self) => self.indexOf(value) === index)
                __textarea_converter_id3.innerHTML = matchingAssessmen
                console.log(matchingAssessmen)
            }
        }

        for (var i = 0; i < plan.length; i++) {
            if (cleanedArray[0].toLowerCase().includes(plan[i].toLowerCase())) {
                matchingPlan.push(plan[i]);
                matchingPlan = matchingPlan.filter((value, index, self) => self.indexOf(value) === index)
                __textarea_converter_id4.innerHTML = matchingPlan
                console.log(matchingPlan)
            }
        }
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