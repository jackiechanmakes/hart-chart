let words1Char =
[
    "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x",
    "y", "z"
];

let words2Char = [
    "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj",
    "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as", "at",
    "au", "av", "aw", "ax", "ay", "az", "ba", "bb", "bc", "bd",
    "be", "bf", "bg", "bh", "bi", "bj", "bk", "bl", "bm", "bn",
    "bo", "bp", "bq", "br", "bs", "bt", "bu", "bv", "bw", "bx",
    "by", "bz", "ca", "cb", "cc", "cd", "ce", "cf", "cg", "ch",
    "ci", "cj", "ck", "cl", "cm", "cn", "co", "cp", "cq", "cr",
    "cs", "ct", "cu", "cv", "cw", "cx", "cy", "cz", "da", "db",
    "dc", "dd", "de", "df", "dg", "dh", "di", "dj", "dk", "dl",
    "dm", "dn", "do", "dp", "dq", "dr", "ds", "dt", "du", "dv",
    "dw", "dx", "dy", "dz", "ea", "eb", "ec", "ed", "ee", "ef",
    "eg", "eh", "ei", "ej", "ek", "el", "em", "en", "eo", "ep",
    "eq", "er", "es", "et", "eu", "ev", "ew", "ex", "ey", "ez",
    "fa", "fb", "fc", "fd", "fe", "ff", "fg", "fh", "fi", "fj",
    "fk", "fl", "fm", "fn", "fo", "fp", "fq", "fr", "fs", "ft",
    "fu", "fv", "fw", "fx", "fy", "fz", "ga", "gb", "gc", "gd",
    "ge", "gf", "gg", "gh", "gi", "gj", "gk", "gl", "gm", "gn",
    "go", "gp", "gq", "gr", "gs", "gt", "gu", "gv", "gw", "gx",
    "gy", "gz", "ha", "hb", "hc", "hd", "he", "hf", "hg", "hh",
    "hi", "hj", "hk", "hl", "hm", "hn", "ho", "hp", "hq", "hr",
    "hs", "ht", "hu", "hv", "hw", "hx", "hy", "hz", "ia", "ib",
    "ic", "id", "ie", "if", "ig", "ih", "ii", "ij", "ik", "il",
    "im", "in", "io", "ip", "iq", "ir", "is", "it", "iu", "iv",
    "iw", "ix", "iy", "iz", "ja", "jb", "jc", "jd", "je", "jf",
    "jg", "jh", "ji", "jj", "jk", "jl", "jm", "jn", "jo", "jp",
    "jq", "jr", "js", "jt", "ju", "jv", "jw", "jx", "jy", "jz",
    "ka", "kb", "kc", "kd", "ke", "kf", "kg", "kh", "ki", "kj",
    "kk", "kl", "km", "kn", "ko", "kp", "kq", "kr", "ks", "kt",
    "ku", "kv", "kw", "kx", "ky", "kz", "la", "lb", "lc", "ld",
    "le", "lf", "lg", "lh", "li", "lj", "lk", "ll", "lm", "ln",
    "lo", "lp", "lq", "lr", "ls", "lt", "lu", "lv", "lw", "lx",
    "ly", "lz", "ma", "mb", "mc", "md", "me", "mf", "mg", "mh",
    "mi", "mj", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr",
    "ms", "mt", "mu", "mv", "mx", "mw", "my", "mz", "na", "nb",
    "nc", "nd", "ne", "nf", "ng", "nh", "ni", "nj", "nk", "nl",
    "nm", "nn", "no", "np", "nq", "nr", "ns", "nt", "nu", "nv",
    "nw", "nx", "ny", "nz", "oa", "ob", "oc", "od", "oe", "of",
    "og", "oh", "oi", "oj", "ok", "ol", "om", "on", "oo", "op",
    "oq", "or", "os", "ot", "ou", "ov", "ow", "ox", "oy", "oz",
    "pa", "pb", "pc", "pd", "pe", "pf", "pg", "ph", "pi", "pj",
    "pk", "pl", "pm", "pn", "po", "pp", "pq", "pr", "ps", "pt",
    "pu", "pv", "pw", "px", "py", "pz", "qa", "qb", "qc", "qd",
    "qe", "qf", "qg", "qh", "qi", "qj", "qk", "ql", "qm", "qn",
    "qo", "qp", "qq", "qr", "qs", "qt", "qu", "qv", "qw", "qx",
    "qy", "qz", "ra", "rb", "rc", "rd", "re", "rf", "rg", "rh",
    "ri", "rj", "rk", "rl", "rm", "rn", "ro", "rp", "rq", "rr",
    "rs", "rt", "ru", "rv", "rw", "rx", "ry", "rz", "sa", "sb",
    "sc", "sd", "se", "sf", "sg", "sh", "si", "sj", "sk", "sl",
    "sm", "sn", "so", "sp", "sq", "sr", "ss", "st", "su", "sv",
    "sw", "sx", "sy", "sz", "ta", "tb", "tc", "td", "te", "tf",
    "tg", "th", "ti", "tj", "tk", "tl", "tm", "tn", "to", "tp",
    "tq", "tr", "ts", "tt", "tu", "tv", "tw", "tx", "ty", "tz",
    "ua", "ub", "uc", "ud", "ue", "uf", "ug", "uh", "ui", "uj",
    "uk", "ul", "um", "un", "uo", "up", "uq", "ur", "us", "ut",
    "uu", "uv", "uw", "ux", "uy", "uz", "va", "vb", "vc", "vd",
    "ve", "vf", "vg", "vh", "vi", "vj", "vk", "vl", "vm", "vn",
    "vo", "vp", "vq", "vr", "vs", "vt", "vu", "vv", "vw", "vx",
    "vy", "vz", "wa", "wb", "wc", "wd", "we", "wf", "wg", "wh",
    "wi", "wj", "wk", "wl", "wm", "wn", "wo", "wp", "wq", "wr",
    "ws", "wt", "wu", "wv", "ww", "wx", "wy", "wz", "xa", "xb",
    "xc", "xd", "xe", "xf", "xg", "xh", "xi", "xj", "xk", "xl",
    "xm", "xn", "xo", "xp", "xq", "xr", "xs", "xt", "xu", "xv",
    "xw", "xx", "xy", "xz", "ya", "yb", "yc", "yd", "ye", "yf",
    "yg", "yh", "yi", "yj", "yk", "yl", "ym", "yn", "yo", "yp",
    "yq", "yr", "ys", "yt", "yu", "yv", "yw", "yx", "yy", "yz",
    "za", "zb", "zc", "zd", "ze", "zf", "zg", "zh", "zi", "zj",
    "zk", "zl", "zm", "zn", "zo", "zp", "zq", "zr", "zs", "zt",
    "zu", "zv", "zw", "zx", "zy", "zz"
];

let words3Char =
[
    "act", "add", "age", "ago", "air", "all", "arm",
    "art", "ask", "bag", "bar", "bed", "big", "bit",
    "box", "boy", "but", "buy", "car", "cup", "cut",
    "day", "dog", "eat", "end", "eye", "few", "fly",
    "for", "gas", "guy", "hot", "how", "key", "kid",
    "leg", "lie", "lot", "low", "man", "new", "off",
    "oil", "old", "one", "our", "out", "own", "pay",
    "put", "red", "run", "say", "sea", "see", "set",
    "she", "sit", "six", "son", "tax", "ten", "the",
    "top", "try", "two", "use", "way", "who", "why",
    "win", "yes", "yet", "you"
];

let words4Char =
[
    "able", "also", "area", "away", "back", "ball", "bank", "base", "beat",
    "best", "bill", "blue", "body", "book", "born", "both", "call", "card",
    "care", "case", "cell", "city", "cold", "come", "cost", "dark", "data",
    "deal", "deep", "door", "down", "draw", "drop", "each", "east", "easy",
    "edge", "else", "even", "face", "fact", "fall", "fast", "feel", "fill",
    "film", "find", "fine", "fire", "firm", "fish", "five", "food", "foot",
    "form", "four", "free", "from", "full", "fund", "game", "girl", "give",
    "goal", "good", "grow", "hair", "half", "hand", "hard", "have", "head",
    "hear", "heat", "help", "here", "high", "hold", "home", "hope", "hour",
    "huge", "idea", "into", "item", "join", "just", "keep", "kind", "know",
    "land", "last", "late", "lead", "left", "less", "life", "like", "line",
    "list", "live", "long", "look", "lose", "loss", "love", "main", "make",
    "many", "meet", "mind", "miss", "more", "most", "move", "much", "must",
    "name", "near", "need", "next", "nice", "none", "note", "once", "only",
    "onto", "open", "over", "page", "part", "pass", "past", "pick", "plan",
    "play", "poor", "pull", "push", "race", "rate", "read", "real", "rest",
    "rich", "rise", "road", "rock", "role", "room", "rule", "safe", "same",
    "save", "seat", "seek", "seem", "sell", "send", "show", "side", "sign",
    "sing", "site", "size", "skin", "some", "song", "soon", "sort", "star",
    "stay", "step", "stop", "such", "sure", "take", "talk", "task", "team",
    "tell", "tend", "term", "test", "than", "that", "them", "then", "they",
    "this", "thus", "time", "town", "tree", "trip", "true", "turn", "type",
    "unit", "upon", "very", "view", "vote", "wait", "walk", "wall", "want",
    "wear", "week", "well", "west", "what", "when", "whom", "wide", "will",
    "wind", "wish", "word", "yard", "yeah", "year", "your"
];

let words5Char =
[
    "about", "above", "admit", "adult", "after", "again", "agent", "agree",
    "ahead", "allow", "alone", "along", "among", "apply", "argue", "avoid",
    "begin", "black", "board", "break", "bring", "build", "carry", "catch",
    "cause", "chair", "check", "child", "civil", "claim", "class", "clear",
    "close", "coach", "color", "could", "court", "cover", "dream", "dress",
    "drive", "early", "eight", "enjoy", "enter", "event", "every", "exist",
    "field", "fight", "final", "first", "floor", "focus", "force", "front",
    "glass", "great", "green", "group", "guess", "happy", "heart", "heavy",
    "hotel", "house", "human", "image", "issue", "large", "later", "laugh",
    "learn", "least", "leave", "level", "light", "local", "major", "maybe",
    "media", "might", "model", "money", "month", "mouth", "movie", "music",
    "never", "night", "north", "occur", "offer", "often", "order", "other",
    "owner", "paper", "party", "peace", "phone", "piece", "place", "plant",
    "point", "power", "price", "prove", "quite", "radio", "raise", "range",
    "reach", "ready", "right", "scene", "score", "sense", "serve", "seven",
    "shake", "share", "short", "since", "skill", "small", "smile", "sound",
    "south", "space", "speak", "spend", "sport", "staff", "stage", "stand",
    "start", "state", "still", "stock", "store", "story", "study", "stuff",
    "style", "table", "teach", "thank", "their", "there", "these", "thing",
    "think", "third", "those", "three", "throw", "today", "total", "tough",
    "trade", "treat", "trial", "truth", "under", "until", "value", "visit",
    "voice", "watch", "water", "weigh", "where", "which", "while", "white",
    "whole", "whose", "woman", "world", "worry", "would", "write", "wrong",
    "young"
];

let words6Char =
[
    "accept", "across", "action", "affect", "agency", "almost", "always",
    "amount", "animal", "answer", "anyone", "appear", "around", "arrive",
    "artist", "assume", "author", "become", "before", "behind", "better",
    "beyond", "budget", "camera", "career", "center", "chance", "change",
    "charge", "choice", "choose", "common", "couple", "course", "create",
    "debate", "decade", "decide", "degree", "design", "detail", "dinner",
    "during", "effect", "effort", "either", "energy", "enough", "entire",
    "expect", "expert", "factor", "family", "figure", "finger", "finish",
    "follow", "forget", "former", "friend", "future", "garden", "ground",
    "growth", "happen",  "impact", "indeed", "inside", "itself", "leader",
    "letter", "likely", "listen", "little", "manage", "market", "matter",
    "member", "memory", "method", "middle", "minute", "modern", "moment",
    "myself", "nation", "nature", "nearly", "notice", "number", "office",
    "option", "others", "parent", "people", "period", "person", "player",
    "policy", "pretty", "public", "rather", "really", "reason", "recent",
    "record", "reduce", "region", "relate", "remain", "remove", "report",
    "result", "return", "reveal", "season", "second", "senior", "series",
    "should", "simple", "simply", "single", "social", "source", "speech",
    "spring", "street", "strong", "summer", "system", "theory", "though",
    "toward", "travel", "window", "within", "wonder", "writer"
];

let words7Char =
[
"ability", "account", "address", "against", "already", "another", "article",
"because", "believe", "benefit", "between", "billion", "brother", "capital",
"central", "century", "certain", "citizen", "clearly", "college", "company",
"compare", "concern", "contain", "control", "country", "culture", "current",
"despite", "develop", "discuss", "economy", "evening", "exactly", "example",
"explain", "federal", "feeling", "finally", "foreign", "forward", "general",
"herself", "himself", "history", "however", "hundred", "imagine", "improve",
"include", "instead", "involve", "kitchen", "machine", "measure", "meeting",
"mention", "message", "million", "mission", "morning", "natural", "network",
"nothing", "officer", "outside", "partner", "patient", "pattern", "perform",
"perhaps", "picture", "popular", "prepare", "present", "prevent", "private",
"problem", "process", "produce", "product", "program", "project", "protect",
"provide", "purpose", "quality", "quickly", "reality", "realize", "receive",
"reflect", "require", "respond", "science", "section", "serious", "service",
"several", "similar", "society", "someone", "special", "station", "student",
"subject", "success", "suggest", "support", "surface", "teacher", "thought",
"through", "tonight", "usually", "various", "western", "whether", "without"
];

let words8Char =
[
    "activity", "actually", "although", "American", "analysis", "anything",
    "approach", "audience", "behavior", "building", "business", "campaign",
    "computer", "consider", "consumer", "continue", "cultural", "customer",
    "decision", "describe", "director", "discover", "economic", "election",
    "everyone", "identify", "increase", "indicate", "industry", "interest",
    "language", "magazine", "maintain", "majority", "material", "movement",
    "national", "official", "painting", "personal", "physical", "position",
    "positive", "possible", "practice", "pressure", "probably", "property",
    "question", "recently", "remember", "research", "resource", "response",
    "security", "shoulder", "somebody", "southern", "specific", "standard",
    "strategy", "suddenly", "thousand", "together", "training", "whatever",
    "yourself"
];
