class ReadItTTS_0Bi {
    static r = 'subtitleIndex';
    static B = 0xa;
    static M = 0x64;
    static Y = 0xa;
    static n = 'timedtext';
    static a = '*://*.youtube.com';
    static b = '(?:https|http)://\\w*\\.youtube\\.com';
    static q = 'stats/watchtime?*';
    static c = 'watch';
    static V = 'cache';
    static E = /[؟؛.。;；:：…?!！？]+/gu;
    static k = /[؟،؛\.。，,;；:：、…\?!！？「」『』・।|]+/gu;
    static C = /[【】\[\]\(\)（）\{\}“”"　…\-—<>]+/gu;
    static z = /\s+/gu;
    static Q = /\d+[,，\.]\d+/u;
    static N = /<\s*(\d+)\s*-\s*(\d+)\s*>(.*?)(?=<[^>]*?>|$)/sg;
    static h = /<\s*\d+\s*-\s*\d+\s*>/g;
    static A = /(?:\(|\[|（|「|『).{1,20}(?:\)|\]|）|」|』)/g;
    static f = 'completed';
    static D = 'speech.platform.bing.com';
    static F = 0x5;
    static J = 'adunit';
    static S = 'vs';
    static t = ['TTSD'];
    static m = 0.5;
    static e = 'fix_sub';
    static d = 0.5;
    static Z = 0.06;
    static H = 'currentTime';
    static p = 'ci';
    static K = 'dvl';
    static DEBUG = {
        [ReadItTTS_0Bi.t[0x0]]: { 'default': false },
        'j': { 'default': true },
        'default': true
    };
    static TRACE = { 'default': false };
    static ERROR = { 'default': true };
    static x = 'user';
    static I = 'processSub';
    static y = false;
    static w = 0.8;
    static P = 0.65;
    static u = 0.3;
    static L = 'playbackRate';
    static l = 0x3;
    static G = 0x1388;
    static s = 'pg';
    static o = 'TTSPlugin';
    static g = 'TTSPluginA';
    static O = 'urls';
    static URL = 'url';
    static i = 'sub_url';
    static X = 'api';
    static U = 'value';
    static T = 'st';
    static R = 'psd';
    static W = 'server';
    static T = 'st';
    static v = 'idx';
    static r0 = 'arr';
    static r1 = 'tc';
    static r2 = 'content';
    static r3 = 'https://www.readit.cloud';
    static r4 = 'll';
    static r5 = 'tcl';
    static r6 = 'len';
    static r7 = 'type';
    static r8 = 'client_id';
    static r9 = 'language';
    static rr = [
        'tlang',
        'lang'
    ];
    static rB = 'accountStatus';
    static rM = 'visitorId';
    static rY = 'usage';
    static rn = 'time';
    static ra = 'voice';
    static rb = 'time1';
    static rq = 'time2';
    static rc = 'day';
    static rV = 'text_length';
    static rE = 'ut';
    static rk = 'action';
    static rC = 'extension_id';
    static rz = 'data';
    static rQ = 'TTSPlayingStatus';
    static rN = 'Updated';
    static rh = 'TTSTranslation_page';
    static rA = 'TTSTranslation_settings';
    static rf = 'TTSsu';
    static rD = 'ReaditTTSt';
    static rF = 'videoId';
    static rJ = 'targetLang';
    static rS = 'sourceLang';
    static rt = 'tab';
    static source = 'source';
    static rm = 'v';
    static re = 'tlang';
    static rd = 'lang';
    static rZ = 0x3;
    static rH = 'events';
    static rp = 'baseUrl';
    static rK = 'stats/qoe?*';
    static rj = 'docid';
    static rx = 'uid';
    static rI = 'ad';
    static ry = 'main';
    static rw = 'con';
    static rP = 'detailpage';
    static ru = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
    static rL = 'get';
}
class ReadItTTS_0BX {
    constructor(Bi, BX = '', BU = null) {
        this.rl = Bi;
        this.map = new Map();
        this.name = BX;
        this.rG = BU;
    }
    push(Bi, BX) {
        let BU = Array.from(this.map.keys());
        if (BU.length >= this.rl) {
            this.remove(BU[0x0]);
        }
        this.map.set(Bi, BX);
    }
    get(Bi, BX = null) {
        let BU = this.map.get(Bi);
        if (BU == null) {
            BU = BX;
        }
        return BU;
    }
    getKey(Bi) {
        for (let BX of this.map.keys()) {
            if (this.map.get(BX) == Bi) {
                return BX;
            }
        }
        return null;
    }
    shift() {
        let Bi = null;
        let BX = this.map.keys().next().value;
        if (BX != null) {
            Bi = this.get(BX);
            this.remove(BX);
        }
        return Bi;
    }
    rs() {
        return JSON.stringify(this.ro());
    }
    ro() {
        let Bi = {};
        for (let [BU, BT] of this.map) {
            if (this.rG != null) {
                Bi[BU] = this.rG.ro(BT);
            } else {
                Bi[BU] = BT;
            }
        }
        let BX = {
            'name': this.name,
            'rl': this.rl,
            'map': Bi
        };
        return BX;
    }
    update(Bi) {
        if (typeof Bi === 'string') {
            Bi = JSON.parse(Bi);
        }
        this.rl = Bi.rl;
        this.name = Bi.name;
        let BX = Object.keys(Bi.map);
        for (let BU of BX) {
            if (this.rG != null) {
                this.map.set(BU, this.rG.rg(Bi.map[BU]));
            } else {
                this.map.set(BU, Bi.map[BU]);
            }
        }
    }
    static rg(Bi) {
        let BX = new ReadItTTS_0BX(Bi.rl, Bi.name);
        BX.update(Bi);
        return BX;
    }
    remove(Bi) {
        this.map.delete(Bi);
    }
    contains(Bi) {
        return this.map.has(Bi);
    }
    clear() {
        this.map.clear();
    }
    size() {
        return this.map.size;
    }
}
class ReadItTTS_0BU {
    constructor(Bi, BX = '', BU = 0x0, BT = null) {
        this.rl = Bi;
        this.rO = [];
        this.name = BX;
        this.ri = BU;
        this.rG = BT;
    }
    push(Bi) {
        if (this.rO.length >= this.rl) {
            this.rO.shift();
        }
        this.rO.push(Bi);
    }
    remove(Bi) {
        let BX = this.rO.indexOf(Bi);
        if (BX > -0x1) {
            this.rO.splice(BX, 0x1);
        }
    }
    rs() {
        return JSON.stringify(this.ro());
    }
    ro() {
        let Bi = {
            'name': this.name,
            'rl': this.rl,
            'ri': this.ri,
            'rO': this.rO
        };
        return Bi;
    }
    update(Bi) {
        if (typeof Bi === 'string') {
            Bi = JSON.parse(Bi);
        }
        this.rl = Bi.rl;
        this.name = Bi.name;
        this.ri = Bi.ri;
        if (this.rG != null) {
            this.rO = Bi.rO.map(BX => this.rG.rg(BX));
        } else {
            this.rO = [...Bi.rO];
        }
    }
    static rg(Bi, BX = null) {
        let BU = new ReadItTTS_0BU(Bi.rl, Bi.name, Bi.ri, BX);
        BU.update(Bi);
        return BU;
    }
    clear(Bi = 0x1) {
        let BX = Math.round(Bi * this.rO.length);
        while (BX > 0x0 && this.rO.length > 0x0) {
            this.rO.shift();
            BX--;
        }
    }
    get(Bi) {
        if (Bi >= 0x0 && Bi < this.rO.length) {
            return this.rO[Bi];
        }
        return null;
    }
    indexOf(Bi) {
        return this.rO.indexOf(Bi);
    }
    filter(Bi) {
        let BX = [];
        for (let BU of this.rO) {
            if (Bi(BU)) {
                BX.push(BU);
            }
        }
        return BX;
    }
    find(Bi) {
        for (let BX of this.rO) {
            if (Bi(BX)) {
                return BX;
            }
        }
        return null;
    }
    rX() {
        let Bi = this.ri;
        if (this.rO.length > 0x0) {
            Bi = this.rO.reduce((BX, BU) => BX + BU, 0x0) / this.rO.length;
        }
        return Bi;
    }
    rU() {
        return this.rO.length >= this.rl;
    }
    size() {
        return this.rO.length;
    }
    shift() {
        return this.rO.shift();
    }
    pop() {
        return this.rO.pop();
    }
    rT() {
        return this.rO.length == 0x0;
    }
}
class ReadItTTS_0BT {
    static rR = false;
    static rW(Bi, BX) {
        for (let BU in BX) {
            if (ReadItTTS_0BT.rv(Bi, BU)) {
                return BX[BU];
            }
        }
        return BX.default;
    }
    static B0() {
        let Bi = false;
        let BX = new Error().stack;
        BX = BX.split('\n');
        for (let BU of BX) {
            let BT = BU.match(/at (.+)\s\((.+):(\d+):(\d+)\)/);
            if (BT) {
                let BR = BT[0x1];
                let BW = BR.split('.');
                if (BW.length > 0x1) {
                    if (Bi) {
                        return BW;
                    } else {
                        if (BW[0x0] == ReadItTTS_0BT.name && [
                                this.error.name,
                                this.log.name,
                                this.trace.name
                            ]['includes'](BW[0x1])) {
                            Bi = true;
                        }
                    }
                }
            }
        }
        return null;
    }
    static B1(Bi, BX = null, BU = null, BT = 'json3') {
        const BR = new URL(Bi);
        const BW = BR.searchParams;
        let Bv = [
            'tlang',
            'lang',
            'fmt'
        ];
        if (BX != null) {
            BW.set(Bv[0x0], BX);
        } else {
            BW.delete(Bv[0x0]);
        }
        if (BU != null) {
            BW.set(Bv[0x1], BU);
        }
        BW.set(Bv[0x2], BT);
        return BR.toString();
    }
    static B2(Bi, BX, BU) {
        let BT = null;
        switch (BU) {
        case 'DEBUG':
            if (Bi) {
                if (ReadItTTS_0Bi.DEBUG[Bi] != null) {
                    if (ReadItTTS_0Bi.DEBUG[Bi][BX] != null) {
                        BT = ReadItTTS_0Bi.DEBUG[Bi][BX];
                    } else if (ReadItTTS_0Bi.DEBUG[Bi]['default'] != null) {
                        BT = ReadItTTS_0Bi.DEBUG[Bi]['default'];
                    }
                }
            }
            if (BT == null) {
                BT = ReadItTTS_0Bi.DEBUG.default;
            }
            break;
        case 'ERROR':
            if (Bi) {
                if (ReadItTTS_0Bi.ERROR[Bi] != null) {
                    if (ReadItTTS_0Bi.ERROR[Bi][BX] != null) {
                        BT = ReadItTTS_0Bi.ERROR[Bi][BX];
                    } else if (ReadItTTS_0Bi.ERROR[Bi]['default'] != null) {
                        BT = ReadItTTS_0Bi.ERROR[Bi]['default'];
                    }
                }
            }
            if (BT == null) {
                BT = ReadItTTS_0Bi.ERROR.default;
            }
            break;
        case 'TRACE':
            if (Bi) {
                if (ReadItTTS_0Bi.TRACE[Bi] != null) {
                    if (ReadItTTS_0Bi.TRACE[Bi][BX] != null) {
                        BT = ReadItTTS_0Bi.TRACE[Bi][BX];
                    } else if (BT = ReadItTTS_0Bi.TRACE[Bi]['default'] != null) {
                        BT = ReadItTTS_0Bi.TRACE[Bi]['default'];
                    }
                }
            }
            if (BT == null) {
                BT = ReadItTTS_0Bi.TRACE.default;
            }
            break;
        }
        return BT;
    }
    static error(Bi) {
        const BX = ReadItTTS_0BT.B0();
        if (BX && ReadItTTS_0BT.B2(BX[0x0], BX[0x1], 'ERROR')) {
            console.error(this.getCurrentTime() + ' - [' + BX[0x0] + ', ' + BX[0x1] + '] ' + Bi);
        } else {
            console.error(Bi);
        }
    }
    static trace(Bi) {
        const BX = ReadItTTS_0BT.B0();
        if (BX && ReadItTTS_0BT.B2(BX[0x0], BX[0x1], 'TRACE')) {
            console.log(this.getCurrentTime() + ' - [' + BX[0x0] + ', ' + BX[0x1] + '] ' + Bi);
        }
    }
    static log(Bi, BX = null) {
        if (BX == null) {
            BX = ReadItTTS_0BT.B0();
        }
        if (BX && ReadItTTS_0BT.B2(BX[0x0], BX[0x1], 'DEBUG')) {
            console.log(this.getCurrentTime() + ' - [' + BX[0x0] + ', ' + BX[0x1] + '] ' + Bi);
        }
    }
    static assert(condition, Bi) {
        if (!condition) {
            throw new Error(Bi || 'Assertion failed');
        }
    }
    static B3(Bi) {
        return Bi.pendingUrl || Bi.url;
    }
    static B4(Bi, BX = null) {
        return new Promise((BU, BT) => {
            chrome.storage.local.get([Bi], function (BR) {
                let BW = BX;
                if (BR && BR[Bi]) {
                    BW = BR[Bi];
                    if (BX !== null) {
                        if (Array.isArray(BR[Bi])) {
                            BW = [
                                ...BX,
                                ...BR[Bi]
                            ];
                        } else if (typeof BR[Bi] == 'object') {
                            BW = {
                                ...BX,
                                ...BR[Bi]
                            };
                        }
                    }
                }
                BU(BW);
            });
        });
    }
    static B5(Bi, BX) {
        return new Promise(async (BU, BT) => {
            if (BX == null) {
                chrome.storage.local.remove([Bi], function () {
                    var BR = chrome.runtime.lastError;
                    if (BR) {
                    }
                    BU();
                });
            } else {
                chrome.storage.local.set({ [Bi]: BX }, function () {
                    BU();
                });
            }
        });
    }
    static B6(config) {
        let Bi = config.voice != null && config.voice.trim().length > 0x0 && config.language != null && config.language.trim().length > 0x0;
        return Bi;
    }
    static B7() {
        return {
            'pitch': [
                null,
                0x0,
                null
            ],
            'dvl': [
                null,
                '1.20-1.1',
                null
            ]
        };
    }
    static getLanguageName(language) {
        let Bi = 'language_name';
        for (let BX in Language.COUNTRIES) {
            if (ReadItTTS_0BT.rv(BX, language)) {
                return Language.COUNTRIES[BX][Bi];
            }
        }
    }
    static B8() {
        let Bi = {
            'play_volume': 0x1,
            'pitch': 0x0,
            'voice': null,
            'language': ReadItTTS_0BT.getLanguage(navigator.language || navigator.userLanguage),
            'show_my_language_only': true,
            'scroll_before_reading_page': false,
            'show_tts_floating_icon': 'Normal',
            [ReadItTTS_0Bi.r5]: '3-15-60',
            'floating_icon_position': 0x96,
            'floating_icon_position_left': false,
            'scroll_to_highlighted_text': true,
            [ReadItTTS_0Bi.K]: '1.20-1.1',
            'dynamic_volume': true,
            'volume_rate': 0.13,
            'auto_play': false
        };
        return Bi;
    }
    static async B9() {
        let Bi = ReadItTTS_0BT.B8();
        let BX = await ReadItTTS_0BT.B4(ReadItTTS_0Bi.o, Bi);
        let BU = await ReadItTTS_0BT.Br();
        BX[ReadItTTS_0Bi.r5] = BU[ReadItTTS_0Bi.r5] != null ? BU[ReadItTTS_0Bi.r5] : Bi[ReadItTTS_0Bi.r5];
        let BT = BX[ReadItTTS_0Bi.K];
        let BR = BU[ReadItTTS_0Bi.K];
        let BW = BR.findIndex(M1 => M1 == BT);
        BW = BW == -0x1 ? BR.findIndex(M1 => M1 != null) : BW;
        BX[ReadItTTS_0Bi.K] = BR[BW];
        let Bv = BU.pitch;
        let M0 = Bv.findIndex(M1 => M1 == BX.pitch);
        M0 = M0 == -0x1 ? Bv.findIndex(M1 => M1 != null) : M0;
        BX.pitch = Bv[M0];
        return BX;
    }
    static Br() {
        let Bi = {
            'pitch': [
                null,
                0x0,
                null
            ],
            'dvl': [
                null,
                '1.20-1.1',
                null
            ]
        };
        return ReadItTTS_0BT.B4(ReadItTTS_0Bi.g, Bi);
    }
    static async BB(Bi) {
        if (Bi && Bi[ReadItTTS_0Bi.rx] != null) {
            let BX = await ReadItTTS_0BT.BM();
            BX[ReadItTTS_0Bi.rx] = Bi[ReadItTTS_0Bi.rx];
            await ReadItTTS_0BT.B5(ReadItTTS_0Bi.x, BX);
        }
    }
    static async BY() {
        let Bi = await ReadItTTS_0BT.B4(ReadItTTS_0Bi.g, null);
        if (Bi != null) {
            return Bi;
        }
        return new Promise((BX, BU) => {
            let BT = {};
            ReadItTTS_0BT.BM().then(BR => {
                if (BR != null && BR[ReadItTTS_0Bi.rx] != null) {
                    BT[ReadItTTS_0Bi.rx] = BR[ReadItTTS_0Bi.rx];
                }
            }).finally(() => {
                BT[ReadItTTS_0Bi.rC] = ReadItTTS_0BT.Bn();
                const BR = {
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json' },
                    'body': JSON.stringify(BT)
                };
                let BW = ReadItTTS_0Bi.r3 + '/config/get';
                ReadItTTS_0BT.Ba(BW, BR, 0x1, 0x1f40).then(async Bv => {
                    if (Bv.ok && Bv.parsedData?.['data'] != null) {
                        await ReadItTTS_0BT.BB(Bv.parsedData);
                        Bi = Bv.parsedData.data;
                        await ReadItTTS_0BT.B5(ReadItTTS_0Bi.g, Bi);
                    }
                }).finally(async () => {
                    BX(Bi);
                });
            });
        });
    }
    static async Bb(Bi = {}, BX = true) {
        if (Bi) {
            let BU = [
                'version',
                'settingChanged',
                'playStatus',
                'ttsChanged'
            ];
            if (Bi[BU[0x1]] || BX) {
                await ReadItTTS_0BT.Bq(null);
                await ReadItTTS_0BT.B5(ReadItTTS_0Bi.g, null);
            }
            if (Bi[BU[0x2]] || BX) {
                await ReadItTTS_0BT.B5(ReadItTTS_0Bi.rQ, null);
            }
            if (Bi[BU[0x3]] || BX) {
                await ReadItTTS_0BT.B5(ReadItTTS_0Bi.S, null);
            }
            if (BX) {
                await ReadItTTS_0BT.B5(ReadItTTS_0Bi.rf, null);
                await ReadItTTS_0BT.B5(ReadItTTS_0Bi.rD, null);
                await ReadItTTS_0BT.B5(ReadItTTS_0Bi.rY, null);
                await ReadItTTS_0BT.B5(ReadItTTS_0Bi.rh, null);
                await ReadItTTS_0BT.B5(ReadItTTS_0Bi.rA, null);
            }
        }
    }
    static async Bq(config) {
        await ReadItTTS_0BT.B5(ReadItTTS_0Bi.o, config);
    }
    static async Bc(Bi, BX = '*', BU = '*', config = null, BT = null, BR = true, isSameLanguage = true) {
        BX = BX == null || BX.trim() == 0x0 ? null : BX;
        BU = BU == null || BU.trim() == 0x0 ? null : BU;
        if (BT == null) {
            BT = await ReadItTTS_0BT.B4(ReadItTTS_0Bi.rD, []);
        }
        let BW = BT.filter(Bv => {
            let M0 = Bv[ReadItTTS_0Bi.rF] === Bi;
            M0 &= Bv[ReadItTTS_0Bi.rJ] === BX || BX == '*' || isSameLanguage && ReadItTTS_0BT.rv(Bv[ReadItTTS_0Bi.rJ], BX);
            M0 &= Bv[ReadItTTS_0Bi.rS] === BU || BU == '*' || isSameLanguage && ReadItTTS_0BT.rv(Bv[ReadItTTS_0Bi.rS], BU);
            M0 &= !BR || Bv[ReadItTTS_0Bi.R] === true || Bv[ReadItTTS_0Bi.R] === 'true';
            M0 &= config == null || Bv[ReadItTTS_0Bi.rw] === JSON.stringify(config);
            return M0;
        });
        return BW;
    }
    static async BV(Bi, BX, BU, config = null, BT = null, BR = false) {
        let BW = await ReadItTTS_0BT.Bc(Bi, BX, BU, config, BT, BR);
        return BW.length > 0x0 ? BW[0x0] : null;
    }
    static async Ba(Bi, BX = null, BU = 0x3, BT = 0xbb8, BR = true) {
        let BW = {
            'ok': false,
            'status': 0x0,
            'statusText': '',
            'response': null
        };
        while (BU > 0x0) {
            let Bv = null;
            try {
                const controller = new AbortController();
                Bv = setTimeout(() => {
                    controller.abort();
                    Bv = null;
                }, BT);
                let M0 = { 'signal': controller.signal };
                if (BX != null) {
                    M0 = {
                        ...M0,
                        ...BX
                    };
                }
                let M1 = await fetch(Bi, M0);
                clearTimeout(Bv);
                BW = { 'ok': M1.ok };
                if (BW.ok) {
                    Bv = null;
                    try {
                        BW.parsedData = BR ? await M1.json() : await M1.text();
                    } catch (M2) {
                        BW.parsedData = null;
                    }
                    return BW;
                } else {
                    if ([
                            0x198,
                            0x1f4,
                            0x1f6,
                            0x1f7,
                            0x1f8
                        ]['includes'](M1.status)) {
                        throw new Error('Error in response.');
                    } else {
                        BW.parsedData = null;
                        BW.ok = true;
                        return BW;
                    }
                }
            } catch (M3) {
                if (M3.name == 'AbortError') {
                    console.log('Timeout, retry...');
                    BW.statusText = 'Timeout';
                } else {
                    BW.statusText = M3.message ? M3.message : 'Unknown error';
                    console.log('Error fetching data, retry...');
                }
                if (Bv != null) {
                    clearTimeout(Bv);
                    Bv = null;
                }
            } finally {
                BU--;
            }
        }
        return BW;
    }
    static BE(Bi) {
        let BX = new URL(Bi);
        return BX.hostname.includes('youtube.com');
    }
    static Bk(Bi, BX = false) {
        Bi.events = Bi?.['events']['filter'](BU => BU?.['segs'] && (BX || Boolean((' ' + BU?.['segs']['map'](BT => BT.utf8).toString()).trim())));
    }
    static BC(Bi, BX = true) {
        let BU = '';
        let BT = Bi.events;
        for (let BR = 0x0; BR < BT.length; BR++) {
            const BW = BT[BR];
            let {
                segs: segs = [],
                tStartMs: tStartMs,
                dDurationMs: dDurationMs
            } = BW;
            if (BR < BT.length - 0x1) {
                const M0 = BT[BR + 0x1];
                if (M0.tStartMs < tStartMs + dDurationMs) {
                    dDurationMs = M0.tStartMs - tStartMs;
                }
            }
            const Bv = '<' + tStartMs + ' - ' + dDurationMs + '>';
            if (BX) {
                BU += Bv;
            } else {
                BU += ' ';
            }
            segs.map(M1 => {
                BU += M1.utf8.toString();
            });
        }
        return BU;
    }
    static Bz() {
        const Bi = new Date();
        const BX = Bi.getFullYear();
        const BU = String(Bi.getMonth() + 0x1).padStart(0x2, '0');
        const BT = String(Bi.getDate()).padStart(0x2, '0');
        const BR = BX + '-' + BU + '-' + BT;
        return BR;
    }
    static getCurrentTime() {
        const Bi = new Date();
        let BX = ReadItTTS_0BT.Bz();
        const BU = String(Bi.getHours()).padStart(0x2, '0');
        const BT = String(Bi.getMinutes()).padStart(0x2, '0');
        const seconds = String(Bi.getSeconds()).padStart(0x2, '0');
        const miliSeconds = String(Bi.getMilliseconds()).padStart(0x3, '0');
        const BR = BX + ': ' + BU + ':' + BT + ':' + seconds + ':' + miliSeconds;
        return BR;
    }
    static async BQ(Bi, BX) {
        if (BX == null) {
            let M0 = new Error('qualityScore is null');
            M0.reason = 'null';
            throw M0;
        }
        const [BU, BT, BR] = ReadItTTS_0BT.BN(Bi);
        let BW = await ReadItTTS_0BT.B4(ReadItTTS_0Bi.rD, []);
        let Bv = await ReadItTTS_0BT.BV(BU, BT, BR, null, BW);
        Bv[ReadItTTS_0Bi.Bh] = BX;
        await ReadItTTS_0BT.B5(ReadItTTS_0Bi.rD, BW);
    }
    static async BA(Bi = false) {
        let BX = ReadItTTS_0BT.B4(ReadItTTS_0Bi.r4, null);
        if (BX == null && Bi) {
            ReadItTTS_0BT.B5(ReadItTTS_0Bi.r4, {});
            return {};
        }
        return BX;
    }
    static async releaseLock() {
        let Bi = ReadItTTS_0BT.B4(ReadItTTS_0Bi.r4, null);
        if (Bi != null) {
            ReadItTTS_0BT.B5(ReadItTTS_0Bi.r4, null);
        }
    }
    static async Bf(Bi, content, BX = false, config = null, BU = null) {
        if (content == null) {
            let M2 = new Error('content is null');
            M2.reason = 'null';
            throw M2;
        }
        const [BT, BR, BW] = ReadItTTS_0BT.BN(Bi);
        let Bv = await ReadItTTS_0BT.B4(ReadItTTS_0Bi.rD, []);
        const M0 = await ReadItTTS_0BT.BV(BT, BR, BW, config, Bv, BX);
        if (M0) {
            return;
        }
        Bv.sort((M3, M4) => {
            return M3.time - M4.time;
        });
        if (Bv.length > 0x14) {
            Bv.splice(0x0, Bv.length - 0x14);
        }
        const M1 = {
            [ReadItTTS_0Bi.URL]: Bi,
            [ReadItTTS_0Bi.rF]: BT,
            [ReadItTTS_0Bi.rS]: BW,
            [ReadItTTS_0Bi.rJ]: BR,
            [ReadItTTS_0Bi.r2]: content,
            [ReadItTTS_0Bi.R]: BX,
            [ReadItTTS_0Bi.rn]: Date.now(),
            [ReadItTTS_0Bi.rw]: config == null ? null : JSON.stringify(config),
            [ReadItTTS_0Bi.Bh]: BU
        };
        Bv.push(M1);
        await ReadItTTS_0BT.B5(ReadItTTS_0Bi.rD, Bv);
    }
    static BD(content, targetLanguage) {
        if (ReadItTTS_0BT.BF(targetLanguage)) {
            content = content.replaceAll('呃', '嗯');
        }
        if (ReadItTTS_0BT.BJ(targetLanguage)) {
            content = content.replaceAll('\n', '');
        } else {
            content = content.replaceAll('\n', ' ');
        }
        content = content.replaceAll(/\s+/g, ' ');
        return content;
    }
    static BS(Bi, BX, BU) {
        let BT = 0x0;
        let BR = 0x0;
        let BW;
        while (BT < BU) {
            BW = Bi.indexOf(BX, BR);
            if (BW === -0x1) {
                break;
            }
            BR = BW + BX.length;
            BT++;
        }
        if (BT < BU) {
            return -0x1;
        }
        return [
            BW,
            BT
        ];
    }
    static getJsonByPath(Bi, BX) {
        const BU = BX.split('.');
        let BT = Bi;
        for (const BR of BU) {
            if (BT[BR]) {
                BT = BT[BR];
            } else {
                return null;
            }
        }
        return BT;
    }
    static setJsonByPath(Bi, BX, BU) {
        var BT = BX.split('.');
        var BR = Bi;
        for (var BW = 0x0; BW < BT.length; BW++) {
            if (BW === BT.length - 0x1) {
                BR[BT[BW]] = BU;
            } else if (!(BT[BW] in BR)) {
                BR[BT[BW]] = {};
            }
            BR = BR[BT[BW]];
        }
    }
    static BM() {
        return ReadItTTS_0BT.B4(ReadItTTS_0Bi.x, {});
    }
    static getTTSLanguageItem(Bi, tts_user_language) {
        if (Bi in tts_user_language) {
            return tts_user_language[Bi];
        } else {
            for (const BX in tts_user_language) {
                if (ReadItTTS_0BT.rv(Bi, BX)) {
                    return tts_user_language[BX];
                }
            }
        }
        return null;
    }
    static BJ(Bi) {
        if (Bi) {
            const BX = [
                'ja',
                'zh',
                'th'
            ];
            const BU = Bi.split('-')[0x0];
            return BX.includes(BU.toLowerCase());
        }
        return false;
    }
    static BF(Bi) {
        if (Bi) {
            Bi = Bi.split('-')[0x0];
        }
        return Bi === 'zh';
    }
    static Bt(Bi, BX) {
        return Bi && BX && Bi.toLocaleLowerCase() === BX.toLocaleLowerCase();
    }
    static Bm(Bi) {
        return new Promise((BX, BU) => {
            chrome.tabs.query({}, tabs => {
                let BT = [];
                for (const BR of tabs) {
                    if (ReadItTTS_0BT.B3(BR) == Bi) {
                        BT.push(BR);
                    }
                }
                ;
                BX(BT);
            });
        });
    }
    static Be(Bi) {
        return new Promise((BX, BU) => {
            chrome.tabs.query({}, tabs => {
                let BT = null;
                for (const BR of tabs) {
                    if (BR.id == Bi) {
                        BT = BR;
                        break;
                    }
                }
                ;
                BX(BT);
            });
        });
    }
    static Bd(Bi) {
        try {
            const BX = new URL(Bi);
            if (BX.protocol === 'chrome-extension:') {
                return true;
            }
        } catch (BU) {
        }
        return false;
    }
    static BZ() {
        return new Promise((Bi, BX) => {
            const BU = [
                'active',
                'currentWindow'
            ];
            chrome.tabs.query({
                [BU[0x0]]: true,
                [BU[0x1]]: true
            }, tabs => {
                if (tabs.length > 0x0) {
                    Bi(tabs[0x0]);
                } else {
                    Bi(null);
                }
            });
        });
    }
    static rv(Bi, BX) {
        if (Bi == null || BX == null) {
            return false;
        }
        Bi = ReadItTTS_0BT.getLanguage(Bi);
        BX = ReadItTTS_0BT.getLanguage(BX);
        return Bi === BX;
    }
    static getLanguage(Bi) {
        return Bi ? Bi.toLocaleLowerCase().split('-')[0x0] : null;
    }
    static containsSameL(languages, language) {
        for (const Bi of languages) {
            if (ReadItTTS_0BT.rv(Bi, language)) {
                return true;
            }
        }
        return false;
    }
    static BH(Bi) {
        if (Bi) {
            Bi = Bi.toLowerCase();
            return Bi.indexOf('multilingual') >= 0x0 || Bi.indexOf('multi-lingual') >= 0x0 || Bi.indexOf('multilingual') >= 0x0;
        }
    }
    static BN(Bi) {
        let BX = ['searchParams'];
        let BU = new URL(Bi)[BX[0x0]];
        return [
            BU.get('v'),
            BU.get('tlang'),
            BU.get('lang')
        ];
    }
    static async Bp(Bi = true) {
        const config = await ReadItTTS_0BT.B9(true);
        if (!config.voice || !config.language) {
            return null;
        }
        let userLanguage = ReadItTTS_0BT.BK();
        if (config.language) {
            userLanguage = config.language;
        }
        if (Bi) {
            let BX = ReadItTTS_0BT.getTTSLanguageItem(userLanguage, Language.COUNTRIES);
            const yt_language = BX ? BX.yt : null;
            return yt_language;
        } else {
            return userLanguage;
        }
    }
    static BK() {
        return navigator.language || navigator.userLanguage;
    }
    static Bj() {
        return navigator.languages;
    }
    static Bx(Bi) {
        const BX = /^(http|https):\/\//;
        const localHostPattern = /^(http|https):\/\/localhost/;
        const BU = /^(http|https):\/\/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/;
        Bi = Bi.toLocaleLowerCase();
        return BX.test(Bi) && !BU.test(Bi);
    }
    static containsOnlyWhitespace(Bi) {
        return !Bi || /^\s*$/['test'](Bi);
    }
    static BI(Bi) {
        if (!Array.isArray(Bi) || Bi.length === 0x0) {
            return null;
        }
        let BX = Bi[0x0];
        for (let BU = 0x1; BU < Bi.length; BU++) {
            let BT = Bi[BU];
            if (BT == null) {
                return null;
            }
            while (BX !== BT && !BX.contains(BT)) {
                BX = BX.parentNode;
                if (BX === null) {
                    return null;
                }
            }
        }
        return BX;
    }
    static By(Bi) {
        let BX = 0x0;
        if (Bi.length == 0x0)
            return BX;
        for (let BU = 0x0; BU < Bi.length; BU++) {
            let BT = Bi.charCodeAt(BU);
            BX = (BX << 0x5) - BX + BT;
            BX = BX & BX;
        }
        return BX;
    }
    static Bn() {
        let Bi = ['getManifest'];
        var manifestData = chrome.runtime[Bi[0x0]]();
        return manifestData.version;
    }
    static Bw(Bi, BX) {
        Bi = Bi.replace(ReadItTTS_0Bi.k, BX);
        Bi = Bi.replace(ReadItTTS_0Bi.E, BX);
        Bi = Bi.replace(ReadItTTS_0Bi.C, BX);
        Bi = Bi.replace(/\s+/g, BX);
        Bi = Bi.trim();
        return Bi;
    }
}
class ReadItTTS_0BR {
    constructor() {
        this.BP = false;
    }
    sendMessage(Bi) {
        return new Promise(async (BX, BU) => {
            const BT = await ReadItTTS_0BT.BZ();
            if (BT) {
                chrome.tabs.sendMessage(BT.id, Bi, function (BR) {
                    BX(BR);
                });
            }
        });
    }
    Bu() {
        this.sendMessage({
            'action': 'page_control',
            'type': 'switch_play_stop'
        });
    }
    BL(Bi, BX = 0x5a, BU, BT, ytop) {
        let BR = '';
        BX = Math.PI / 0x2 * (BX / 0x5a);
        let BW = BX;
        const Bv = 0x2 * Math.PI / Bi.length;
        for (let M0 = 0x0; M0 < Bi.length; M0++) {
            const M1 = BT + BU * Math.cos(BW);
            const M2 = ytop - BU * Math.sin(BW);
            if (M0 == 0x0) {
                BR += ' M ' + M1 + ',' + M2;
            } else {
                if (Bi[M0 - 0x1] === 0x1) {
                    BR += ' A ' + BU + ',' + BU + ' 0 0,1 ' + M1 + ',' + M2;
                } else {
                    BR += ' M ' + M1 + ',' + M2;
                }
            }
            BW -= Bv;
        }
        if (Bi[Bi.length - 0x1] === 0x1) {
            const M3 = BT + BU * Math.cos(BW);
            const M4 = ytop - BU * Math.sin(BW);
            BR += ' A ' + BU + ',' + BU + ' 0 0,1 ' + M3 + ',' + M4;
        } else {
        }
        return BR;
    }
    Bl(Bi, BX) {
        const BU = document.getElementById('tts-status-bar');
        let BT = '';
        if (BU)
            if (BX && BX.length > 0x0) {
                const BR = [];
                let BW = Math.ceil(BX.length / 0xc8);
                for (let Bv = 0x0; Bv < BX.length; Bv += BW) {
                    const M0 = BX.slice(Bv, Bv + BW);
                    const M1 = M0.reduce((M2, M3) => M2 & M3 == 0x1, true);
                    BR.push(M1);
                }
                BT = this.BL(BR, 0x5a, BU.clientWidth / 0x2 - 0x2, BU.clientWidth / 0x2, BU.clientWidth / 0x2);
            }
        document.getElementById('tts-status-bar-progress').setAttribute('d', BT);
    }
    Bl(Bi, BX) {
        const BU = document.getElementById('tts-status-bar');
        if (BU.clientHeight == 0x0) {
            return;
        }
        let BT = '';
        if (BU) {
            if (BX && BX.length > 0x0) {
                const BR = [];
                let BW = Math.ceil(BX.length / 0xc8);
                for (let Bv = 0x0; Bv < BX.length; Bv += BW) {
                    const M0 = BX.slice(Bv, Bv + BW);
                    const M1 = M0.reduce((M2, M3) => M2 & M3 == 0x1, true);
                    BR.push(M1);
                }
                BT = this.BL(BR, 0x5a, BU.clientWidth / 0x2 - 0x2, BU.clientWidth / 0x2, BU.clientWidth / 0x2);
            }
            document.getElementById('tts-status-bar-progress').setAttribute('d', BT);
        }
    }
    BG(Bi, BX) {
        if (Bi && BX) {
            const BU = document.getElementById('tts-status-bar-progress_indicator');
            if (BU) {
                const BT = document.getElementById('tts-status-bar');
                let BR = Math.PI / 0x2 - Bi * (0x2 * Math.PI / BX);
                let BW = BR - Math.PI / 0x32;
                const Bv = BT.clientWidth / 0x2 - 0x2;
                let M0 = BT.clientWidth / 0x2;
                let ytop = BT.clientWidth / 0x2;
                const M1 = M0 + Bv * Math.cos(BR);
                const M2 = ytop - Bv * Math.sin(BR);
                const M3 = M0 + Bv * Math.cos(BW);
                const M4 = ytop - Bv * Math.sin(BW);
                let M5 = ' M ' + M1 + ',' + M2 + ' A ' + Bv + ',' + Bv + ' 0 0,1 ' + M3 + ',' + M4;
                BU.setAttribute('d', M5);
            }
        }
    }
    Bs(Bi) {
        const BX = document.getElementById('tts-play-button');
        BX.style.backgroundImage = 'url("' + chrome.runtime.getURL('images/play.png') + '")';
        this.Bo(BX);
        BX.addEventListener('click', () => {
            this.Bu();
            this.BP = !this.BP;
            this.Bg(this.BP, BX);
        });
        document.getElementById('tts-voice-button').style.backgroundImage = 'url("' + chrome.runtime.getURL('images/voice.png') + '")';
        const BU = document.getElementById('tts-setup-button');
        if (BU) {
            BU.style.backgroundImage = 'url("' + chrome.runtime.getURL('images/setup.png') + '")';
            BU.addEventListener('click', () => {
                chrome.runtime.sendMessage({ 'action': 'openOptions' });
            });
        }
        const BT = document.getElementById('tts-voice-level-button');
        if (BT) {
            BT.style.backgroundImage = 'url("' + chrome.runtime.getURL('images/volume.png') + '")';
            BT.onclick = BW => {
                this.sendMessage({
                    'action': 'page_control',
                    'type': 'volume'
                });
            };
        }
        let BR = document.getElementById('tts-voice-button');
        if (BR) {
            BR.addEventListener('click', BW => {
                this.sendMessage({
                    'action': 'page_control',
                    'type': 'voice_list'
                });
            });
        }
    }
    BO(Bi) {
        return new Promise(async (BX, BU) => {
            chrome.tabs.sendMessage(Bi.id, { 'action': 'status' }, function (BT) {
                BX(BT.data);
            });
        });
    }
    async Bo(Bi) {
        let BX = await ReadItTTS_0BT.BZ();
        if (BX) {
            this.BO(BX).then(BU => {
                this.BP = BU[ReadItTTS_0Bi.T];
                this.Bg(this.BP, Bi);
                this.Bl(BU[ReadItTTS_0Bi.v], BU[ReadItTTS_0Bi.r0]);
                this.BG(BU[ReadItTTS_0Bi.v], BU[ReadItTTS_0Bi.r1]);
            });
        }
    }
    Bg(Bi, BX) {
        if (Bi) {
            BX.style.backgroundImage = 'url("' + chrome.runtime.getURL('images/stop.png') + '")';
        } else {
            BX.style.backgroundImage = 'url("' + chrome.runtime.getURL('images/play.png') + '")';
        }
    }
}
window.onload = async function () {
    let controller = new ReadItTTS_0BR();
    controller.Bs();
};
