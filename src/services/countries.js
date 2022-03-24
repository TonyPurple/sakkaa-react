const countries = [
    {
        "name": "Albania",
        "code": "AL",
        "flag": "https://media.api-sports.io/flags/al.svg"
    },
    {
        "name": "Algeria",
        "code": "DZ",
        "flag": "https://media.api-sports.io/flags/dz.svg"
    },
    {
        "name": "Andorra",
        "code": "AD",
        "flag": "https://media.api-sports.io/flags/ad.svg"
    },
    {
        "name": "Angola",
        "code": "AO",
        "flag": "https://media.api-sports.io/flags/ao.svg"
    },
    {
        "name": "Argentina",
        "code": "AR",
        "flag": "https://media.api-sports.io/flags/ar.svg"
    },
    {
        "name": "Armenia",
        "code": "AM",
        "flag": "https://media.api-sports.io/flags/am.svg"
    },
    {
        "name": "Aruba",
        "code": "AW",
        "flag": "https://media.api-sports.io/flags/aw.svg"
    },
    {
        "name": "Australia",
        "code": "AU",
        "flag": "https://media.api-sports.io/flags/au.svg"
    },
    {
        "name": "Austria",
        "code": "AT",
        "flag": "https://media.api-sports.io/flags/at.svg"
    },
    {
        "name": "Azerbaidjan",
        "code": "AZ",
        "flag": "https://media.api-sports.io/flags/az.svg"
    },
    {
        "name": "Bahrain",
        "code": "BH",
        "flag": "https://media.api-sports.io/flags/bh.svg"
    },
    {
        "name": "Bangladesh",
        "code": "BD",
        "flag": "https://media.api-sports.io/flags/bd.svg"
    },
    {
        "name": "Barbados",
        "code": "BB",
        "flag": "https://media.api-sports.io/flags/bb.svg"
    },
    {
        "name": "Belarus",
        "code": "BY",
        "flag": "https://media.api-sports.io/flags/by.svg"
    },
    {
        "name": "Belgium",
        "code": "BE",
        "flag": "https://media.api-sports.io/flags/be.svg"
    },
    {
        "name": "Belize",
        "code": "BZ",
        "flag": "https://media.api-sports.io/flags/bz.svg"
    },
    {
        "name": "Benin",
        "code": "BJ",
        "flag": "https://media.api-sports.io/flags/bj.svg"
    },
    {
        "name": "Bermuda",
        "code": "BM",
        "flag": "https://media.api-sports.io/flags/bm.svg"
    },
    {
        "name": "Bhutan",
        "code": "BT",
        "flag": "https://media.api-sports.io/flags/bt.svg"
    },
    {
        "name": "Bolivia",
        "code": "BO",
        "flag": "https://media.api-sports.io/flags/bo.svg"
    },
    {
        "name": "Bosnia",
        "code": "BA",
        "flag": "https://media.api-sports.io/flags/ba.svg"
    },
    {
        "name": "Botswana",
        "code": "BW",
        "flag": "https://media.api-sports.io/flags/bw.svg"
    },
    {
        "name": "Brazil",
        "code": "BR",
        "flag": "https://media.api-sports.io/flags/br.svg"
    },
    {
        "name": "Bulgaria",
        "code": "BG",
        "flag": "https://media.api-sports.io/flags/bg.svg"
    },
    {
        "name": "Burkina-Faso",
        "code": "BF",
        "flag": "https://media.api-sports.io/flags/bf.svg"
    },
    {
        "name": "Burundi",
        "code": "BI",
        "flag": "https://media.api-sports.io/flags/bi.svg"
    },
    {
        "name": "Cambodia",
        "code": "KH",
        "flag": "https://media.api-sports.io/flags/kh.svg"
    },
    {
        "name": "Cameroon",
        "code": "CM",
        "flag": "https://media.api-sports.io/flags/cm.svg"
    },
    {
        "name": "Canada",
        "code": "CA",
        "flag": "https://media.api-sports.io/flags/ca.svg"
    },
    {
        "name": "Chile",
        "code": "CL",
        "flag": "https://media.api-sports.io/flags/cl.svg"
    },
    {
        "name": "China",
        "code": "CN",
        "flag": "https://media.api-sports.io/flags/cn.svg"
    },
    {
        "name": "Chinese-Taipei",
        "code": "TW",
        "flag": "https://media.api-sports.io/flags/tw.svg"
    },
    {
        "name": "Colombia",
        "code": "CO",
        "flag": "https://media.api-sports.io/flags/co.svg"
    },
    {
        "name": "Congo",
        "code": "CD",
        "flag": "https://media.api-sports.io/flags/cd.svg"
    },
    {
        "name": "Congo-DR",
        "code": "CG",
        "flag": "https://media.api-sports.io/flags/cg.svg"
    },
    {
        "name": "Costa-Rica",
        "code": "CR",
        "flag": "https://media.api-sports.io/flags/cr.svg"
    },
    {
        "name": "Crimea",
        "code": "UA",
        "flag": "https://media.api-sports.io/flags/ua.svg"
    },
    {
        "name": "Croatia",
        "code": "HR",
        "flag": "https://media.api-sports.io/flags/hr.svg"
    },
    {
        "name": "Cuba",
        "code": "CU",
        "flag": "https://media.api-sports.io/flags/cu.svg"
    },
    {
        "name": "Curacao",
        "code": "CW",
        "flag": "https://media.api-sports.io/flags/cw.svg"
    },
    {
        "name": "Cyprus",
        "code": "CY",
        "flag": "https://media.api-sports.io/flags/cy.svg"
    },
    {
        "name": "Czech-Republic",
        "code": "CZ",
        "flag": "https://media.api-sports.io/flags/cz.svg"
    },
    {
        "name": "Denmark",
        "code": "DK",
        "flag": "https://media.api-sports.io/flags/dk.svg"
    },
    {
        "name": "Dominican-Republic",
        "code": "DO",
        "flag": "https://media.api-sports.io/flags/do.svg"
    },
    {
        "name": "Ecuador",
        "code": "EC",
        "flag": "https://media.api-sports.io/flags/ec.svg"
    },
    {
        "name": "Egypt",
        "code": "EG",
        "flag": "https://media.api-sports.io/flags/eg.svg"
    },
    {
        "name": "El-Salvador",
        "code": "SV",
        "flag": "https://media.api-sports.io/flags/sv.svg"
    },
    {
        "name": "England",
        "code": "GB",
        "flag": "https://media.api-sports.io/flags/gb.svg"
    },
    {
        "name": "Estonia",
        "code": "EE",
        "flag": "https://media.api-sports.io/flags/ee.svg"
    },
    {
        "name": "Eswatini",
        "code": "SZ",
        "flag": "https://media.api-sports.io/flags/sz.svg"
    },
    {
        "name": "Ethiopia",
        "code": "ET",
        "flag": "https://media.api-sports.io/flags/et.svg"
    },
    {
        "name": "Faroe-Islands",
        "code": "FO",
        "flag": "https://media.api-sports.io/flags/fo.svg"
    },
    {
        "name": "Fiji",
        "code": "FJ",
        "flag": "https://media.api-sports.io/flags/fj.svg"
    },
    {
        "name": "Finland",
        "code": "FI",
        "flag": "https://media.api-sports.io/flags/fi.svg"
    },
    {
        "name": "France",
        "code": "FR",
        "flag": "https://media.api-sports.io/flags/fr.svg"
    },
    {
        "name": "Gambia",
        "code": "GM",
        "flag": "https://media.api-sports.io/flags/gm.svg"
    },
    {
        "name": "Georgia",
        "code": "GE",
        "flag": "https://media.api-sports.io/flags/ge.svg"
    },
    {
        "name": "Germany",
        "code": "DE",
        "flag": "https://media.api-sports.io/flags/de.svg"
    },
    {
        "name": "Ghana",
        "code": "GH",
        "flag": "https://media.api-sports.io/flags/gh.svg"
    },
    {
        "name": "Gibraltar",
        "code": "GI",
        "flag": "https://media.api-sports.io/flags/gi.svg"
    },
    {
        "name": "Greece",
        "code": "GR",
        "flag": "https://media.api-sports.io/flags/gr.svg"
    },
    {
        "name": "Guadeloupe",
        "code": "GP",
        "flag": "https://media.api-sports.io/flags/gp.svg"
    },
    {
        "name": "Guatemala",
        "code": "GT",
        "flag": "https://media.api-sports.io/flags/gt.svg"
    },
    {
        "name": "Guinea",
        "code": "GN",
        "flag": "https://media.api-sports.io/flags/gn.svg"
    },
    {
        "name": "Haiti",
        "code": "HT",
        "flag": "https://media.api-sports.io/flags/ht.svg"
    },
    {
        "name": "Honduras",
        "code": "HN",
        "flag": "https://media.api-sports.io/flags/hn.svg"
    },
    {
        "name": "Hong-Kong",
        "code": "HK",
        "flag": "https://media.api-sports.io/flags/hk.svg"
    },
    {
        "name": "Hungary",
        "code": "HU",
        "flag": "https://media.api-sports.io/flags/hu.svg"
    },
    {
        "name": "Iceland",
        "code": "IS",
        "flag": "https://media.api-sports.io/flags/is.svg"
    },
    {
        "name": "India",
        "code": "IN",
        "flag": "https://media.api-sports.io/flags/in.svg"
    },
    {
        "name": "Indonesia",
        "code": "ID",
        "flag": "https://media.api-sports.io/flags/id.svg"
    },
    {
        "name": "Iran",
        "code": "IR",
        "flag": "https://media.api-sports.io/flags/ir.svg"
    },
    {
        "name": "Iraq",
        "code": "IQ",
        "flag": "https://media.api-sports.io/flags/iq.svg"
    },
    {
        "name": "Ireland",
        "code": "IE",
        "flag": "https://media.api-sports.io/flags/ie.svg"
    },
    {
        "name": "Israel",
        "code": "IL",
        "flag": "https://media.api-sports.io/flags/il.svg"
    },
    {
        "name": "Italy",
        "code": "IT",
        "flag": "https://media.api-sports.io/flags/it.svg"
    },
    {
        "name": "Ivory-Coast",
        "code": "CI",
        "flag": "https://media.api-sports.io/flags/ci.svg"
    },
    {
        "name": "Jamaica",
        "code": "JM",
        "flag": "https://media.api-sports.io/flags/jm.svg"
    },
    {
        "name": "Japan",
        "code": "JP",
        "flag": "https://media.api-sports.io/flags/jp.svg"
    },
    {
        "name": "Jordan",
        "code": "JO",
        "flag": "https://media.api-sports.io/flags/jo.svg"
    },
    {
        "name": "Kazakhstan",
        "code": "KZ",
        "flag": "https://media.api-sports.io/flags/kz.svg"
    },
    {
        "name": "Kenya",
        "code": "KE",
        "flag": "https://media.api-sports.io/flags/ke.svg"
    },
    {
        "name": "Kosovo",
        "code": "XK",
        "flag": "https://media.api-sports.io/flags/xk.svg"
    },
    {
        "name": "Kuwait",
        "code": "KW",
        "flag": "https://media.api-sports.io/flags/kw.svg"
    },
    {
        "name": "Kyrgyzstan",
        "code": "KG",
        "flag": "https://media.api-sports.io/flags/kg.svg"
    },
    {
        "name": "Laos",
        "code": "LA",
        "flag": "https://media.api-sports.io/flags/la.svg"
    },
    {
        "name": "Latvia",
        "code": "LV",
        "flag": "https://media.api-sports.io/flags/lv.svg"
    },
    {
        "name": "Lebanon",
        "code": "LB",
        "flag": "https://media.api-sports.io/flags/lb.svg"
    },
    {
        "name": "Liberia",
        "code": "LR",
        "flag": "https://media.api-sports.io/flags/lr.svg"
    },
    {
        "name": "Libya",
        "code": "LY",
        "flag": "https://media.api-sports.io/flags/ly.svg"
    },
    {
        "name": "Liechtenstein",
        "code": "LI",
        "flag": "https://media.api-sports.io/flags/li.svg"
    },
    {
        "name": "Lithuania",
        "code": "LT",
        "flag": "https://media.api-sports.io/flags/lt.svg"
    },
    {
        "name": "Luxembourg",
        "code": "LU",
        "flag": "https://media.api-sports.io/flags/lu.svg"
    },
    {
        "name": "Macedonia",
        "code": "MK",
        "flag": "https://media.api-sports.io/flags/mk.svg"
    },
    {
        "name": "Malawi",
        "code": "MW",
        "flag": "https://media.api-sports.io/flags/mw.svg"
    },
    {
        "name": "Malaysia",
        "code": "MY",
        "flag": "https://media.api-sports.io/flags/my.svg"
    },
    {
        "name": "Maldives",
        "code": "MV",
        "flag": "https://media.api-sports.io/flags/mv.svg"
    },
    {
        "name": "Mali",
        "code": "ML",
        "flag": "https://media.api-sports.io/flags/ml.svg"
    },
    {
        "name": "Malta",
        "code": "MT",
        "flag": "https://media.api-sports.io/flags/mt.svg"
    },
    {
        "name": "Mauritania",
        "code": "MR",
        "flag": "https://media.api-sports.io/flags/mr.svg"
    },
    {
        "name": "Mauritius",
        "code": "MU",
        "flag": "https://media.api-sports.io/flags/mu.svg"
    },
    {
        "name": "Mexico",
        "code": "MX",
        "flag": "https://media.api-sports.io/flags/mx.svg"
    },
    {
        "name": "Moldova",
        "code": "MD",
        "flag": "https://media.api-sports.io/flags/md.svg"
    },
    {
        "name": "Mongolia",
        "code": "MN",
        "flag": "https://media.api-sports.io/flags/mn.svg"
    },
    {
        "name": "Montenegro",
        "code": "ME",
        "flag": "https://media.api-sports.io/flags/me.svg"
    },
    {
        "name": "Morocco",
        "code": "MA",
        "flag": "https://media.api-sports.io/flags/ma.svg"
    },
    {
        "name": "Myanmar",
        "code": "MM",
        "flag": "https://media.api-sports.io/flags/mm.svg"
    },
    {
        "name": "Namibia",
        "code": "NA",
        "flag": "https://media.api-sports.io/flags/na.svg"
    },
    {
        "name": "Nepal",
        "code": "NP",
        "flag": "https://media.api-sports.io/flags/np.svg"
    },
    {
        "name": "Netherlands",
        "code": "NL",
        "flag": "https://media.api-sports.io/flags/nl.svg"
    },
    {
        "name": "New-Zealand",
        "code": "NZ",
        "flag": "https://media.api-sports.io/flags/nz.svg"
    },
    {
        "name": "Nicaragua",
        "code": "NI",
        "flag": "https://media.api-sports.io/flags/ni.svg"
    },
    {
        "name": "Nigeria",
        "code": "NG",
        "flag": "https://media.api-sports.io/flags/ng.svg"
    },
    {
        "name": "Northern-Ireland",
        "code": "GB",
        "flag": "https://media.api-sports.io/flags/gb.svg"
    },
    {
        "name": "Norway",
        "code": "NO",
        "flag": "https://media.api-sports.io/flags/no.svg"
    },
    {
        "name": "Oman",
        "code": "OM",
        "flag": "https://media.api-sports.io/flags/om.svg"
    },
    {
        "name": "Pakistan",
        "code": "PK",
        "flag": "https://media.api-sports.io/flags/pk.svg"
    },
    {
        "name": "Palestine",
        "code": "PS",
        "flag": "https://media.api-sports.io/flags/ps.svg"
    },
    {
        "name": "Panama",
        "code": "PA",
        "flag": "https://media.api-sports.io/flags/pa.svg"
    },
    {
        "name": "Paraguay",
        "code": "PY",
        "flag": "https://media.api-sports.io/flags/py.svg"
    },
    {
        "name": "Peru",
        "code": "PE",
        "flag": "https://media.api-sports.io/flags/pe.svg"
    },
    {
        "name": "Philippines",
        "code": "PH",
        "flag": "https://media.api-sports.io/flags/ph.svg"
    },
    {
        "name": "Poland",
        "code": "PL",
        "flag": "https://media.api-sports.io/flags/pl.svg"
    },
    {
        "name": "Portugal",
        "code": "PT",
        "flag": "https://media.api-sports.io/flags/pt.svg"
    },
    {
        "name": "Qatar",
        "code": "QA",
        "flag": "https://media.api-sports.io/flags/qa.svg"
    },
    {
        "name": "Romania",
        "code": "RO",
        "flag": "https://media.api-sports.io/flags/ro.svg"
    },
    {
        "name": "Russia",
        "code": "RU",
        "flag": "https://media.api-sports.io/flags/ru.svg"
    },
    {
        "name": "Rwanda",
        "code": "RW",
        "flag": "https://media.api-sports.io/flags/rw.svg"
    },
    {
        "name": "San-Marino",
        "code": "SM",
        "flag": "https://media.api-sports.io/flags/sm.svg"
    },
    {
        "name": "Saudi-Arabia",
        "code": "SA",
        "flag": "https://media.api-sports.io/flags/sa.svg"
    },
    {
        "name": "Scotland",
        "code": "GB",
        "flag": "https://media.api-sports.io/flags/gb.svg"
    },
    {
        "name": "Senegal",
        "code": "SN",
        "flag": "https://media.api-sports.io/flags/sn.svg"
    },
    {
        "name": "Serbia",
        "code": "RS",
        "flag": "https://media.api-sports.io/flags/rs.svg"
    },
    {
        "name": "Singapore",
        "code": "SG",
        "flag": "https://media.api-sports.io/flags/sg.svg"
    },
    {
        "name": "Slovakia",
        "code": "SK",
        "flag": "https://media.api-sports.io/flags/sk.svg"
    },
    {
        "name": "Slovenia",
        "code": "SI",
        "flag": "https://media.api-sports.io/flags/si.svg"
    },
    {
        "name": "Somalia",
        "code": "SO",
        "flag": "https://media.api-sports.io/flags/so.svg"
    },
    {
        "name": "South-Africa",
        "code": "ZA",
        "flag": "https://media.api-sports.io/flags/za.svg"
    },
    {
        "name": "South-Korea",
        "code": "KR",
        "flag": "https://media.api-sports.io/flags/kr.svg"
    },
    {
        "name": "Spain",
        "code": "ES",
        "flag": "https://media.api-sports.io/flags/es.svg"
    },
    {
        "name": "Sudan",
        "code": "SD",
        "flag": "https://media.api-sports.io/flags/sd.svg"
    },
    {
        "name": "Surinam",
        "code": "SR",
        "flag": "https://media.api-sports.io/flags/sr.svg"
    },
    {
        "name": "Sweden",
        "code": "SE",
        "flag": "https://media.api-sports.io/flags/se.svg"
    },
    {
        "name": "Switzerland",
        "code": "CH",
        "flag": "https://media.api-sports.io/flags/ch.svg"
    },
    {
        "name": "Syria",
        "code": "SY",
        "flag": "https://media.api-sports.io/flags/sy.svg"
    },
    {
        "name": "Tajikistan",
        "code": "TJ",
        "flag": "https://media.api-sports.io/flags/tj.svg"
    },
    {
        "name": "Tanzania",
        "code": "TZ",
        "flag": "https://media.api-sports.io/flags/tz.svg"
    },
    {
        "name": "Thailand",
        "code": "TH",
        "flag": "https://media.api-sports.io/flags/th.svg"
    },
    {
        "name": "Trinidad-And-Tobago",
        "code": "TT",
        "flag": "https://media.api-sports.io/flags/tt.svg"
    },
    {
        "name": "Tunisia",
        "code": "TN",
        "flag": "https://media.api-sports.io/flags/tn.svg"
    },
    {
        "name": "Turkey",
        "code": "TR",
        "flag": "https://media.api-sports.io/flags/tr.svg"
    },
    {
        "name": "Turkmenistan",
        "code": "TM",
        "flag": "https://media.api-sports.io/flags/tm.svg"
    },
    {
        "name": "Uganda",
        "code": "UG",
        "flag": "https://media.api-sports.io/flags/ug.svg"
    },
    {
        "name": "Ukraine",
        "code": "UA",
        "flag": "https://media.api-sports.io/flags/ua.svg"
    },
    {
        "name": "United-Arab-Emirates",
        "code": "AE",
        "flag": "https://media.api-sports.io/flags/ae.svg"
    },
    {
        "name": "Uruguay",
        "code": "UY",
        "flag": "https://media.api-sports.io/flags/uy.svg"
    },
    {
        "name": "USA",
        "code": "US",
        "flag": "https://media.api-sports.io/flags/us.svg"
    },
    {
        "name": "Uzbekistan",
        "code": "UZ",
        "flag": "https://media.api-sports.io/flags/uz.svg"
    },
    {
        "name": "Venezuela",
        "code": "VE",
        "flag": "https://media.api-sports.io/flags/ve.svg"
    },
    {
        "name": "Vietnam",
        "code": "VN",
        "flag": "https://media.api-sports.io/flags/vn.svg"
    },
    {
        "name": "Wales",
        "code": "GB",
        "flag": "https://media.api-sports.io/flags/gb.svg"
    },
    {
        "name": "World",
        "code": null,
        "flag": null
    },
    {
        "name": "Zambia",
        "code": "ZM",
        "flag": "https://media.api-sports.io/flags/zm.svg"
    },
    {
        "name": "Zimbabwe",
        "code": "ZW",
        "flag": "https://media.api-sports.io/flags/zw.svg"
    }
]

export function getAllCountries() {
    return countries;
}

