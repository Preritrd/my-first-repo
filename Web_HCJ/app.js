// const countryList = {
//     AED: "AE", AFN: "AF", ALL: "AL", AMD: "AM", ANG: "AO", AOA: "AO", ARS: "AR", AUD: "AU", AWG: "AW", AZN: "AZ",
//     BAM: "BA", BBD: "BB", BDT: "BD", BGN: "BG", BHD: "BH", BIF: "BI", BMD: "BM", BND: "BN", BOB: "BO", BRL: "BR",
//     BSD: "BS", BTN: "BT", BWP: "BW", BYN: "BY", BZD: "BZ", CAD: "CA", CDF: "CD", CHF: "CH", CLP: "CL", CNY: "CN",
//     COP: "CO", CRC: "CR", CUC: "CU", CUP: "CU", CVE: "CV", CZK: "CZ", DJF: "DJ", DKK: "DK", DOP: "DO", DZD: "DZ",
//     EGP: "EG", ERN: "ER", ETB: "ET", EUR: "EU", FJD: "FJ", FKP: "FK", GBP: "GB", GEL: "GE", GHS: "GH", GIP: "GI",
//     GMD: "GM", GNF: "GN", GTQ: "GT", GYD: "GY", HKD: "HK", HNL: "HN", HRK: "HR", HTG: "HT", HUF: "HU", IDR: "ID",
//     ILS: "IL", INR: "IN", IQD: "IQ", IRR: "IR", ISK: "IS", JMD: "JM", JOD: "JO", JPY: "JP", USD: "US", KES: "KE",
//     KGS: "KG", KHR: "KH", KMF: "KM", KPW: "KP", KRW: "KR", KWD: "KW", KYD: "KY", KZT: "KZ", LAK: "LA", LBP: "LB",
//     LKR: "LK", LRD: "LR", LSL: "LS", LYD: "LY", MAD: "MA", MDL: "MD", MGA: "MG", MKD: "MK", MMK: "MM", MNT: "MN",
//     MOP: "MO", MRU: "MR", MUR: "MU", MVR: "MV", MWK: "MW", MXN: "MX", MYR: "MY", MZN: "MZ", NAD: "NA", NGN: "NG",
//     NIO: "NI", NOK: "NO", NPR: "NP", NZD: "NZ", OMR: "OM", PAB: "PA", PEN: "PE", PGK: "PG", PHP: "PH", PKR: "PK",
//     PLN: "PL", PYG: "PY", QAR: "QA", RON: "RO", RSD: "RS", RUB: "RU", RWF: "RW", SAR: "SA", SBD: "SB", SCR: "SC",
//     SDG: "SD", SEK: "SE", SGD: "SG", SHP: "SH", SLL: "SL", SOS: "SO", SRD: "SR", SSP: "SS", STN: "ST", SVC: "SV",
//     SYP: "SY", SZL: "SZ", THB: "TH", TJS: "TJ", TMT: "TM", TND: "TN", TOP: "TO", TRY: "TR", TTD: "TT", TWD: "TW",
//     TZS: "TZ", UAH: "UA", UGX: "UG", UYU: "UY", UZS: "UZ", VES: "VE", VND: "VN", VUV: "VU", WST: "WS", XAF: "CM", ZWL: "ZW"
// };

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.getElementById("btn");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// // Populate dropdowns
// dropdowns.forEach(select => {
//     Object.keys(countryList).forEach(code => {
//         const option = document.createElement("option");
//         option.value = code;
//         option.textContent = code;
//         if (select.name === "from" && code === "USD") option.selected = true;
//         if (select.name === "to" && code === "INR") option.selected = true;
//         select.appendChild(option);
//     });
//     select.addEventListener("change", () => updateFlag(select));
//     updateFlag(select);
// });

// // Update flag
// function updateFlag(select) {
//     const code = countryList[select.value];
//     const img = select.closest(".select-container").querySelector("img");
//     if (img) img.src = `https://flagsapi.com/${code}/flat/64.png`;
// }

// // Convert currency
// btn.addEventListener("click", async () => {
//     let amount = parseFloat(document.querySelector(".amount input").value);
//     if (isNaN(amount) || amount <= 0) {
//         amount = 1;
//         document.querySelector(".amount input").value = "1";
//     }

//     try {
//         const res = await fetch(`https://api.exchangerate.host/latest?base=${fromCurr.value}`);
//         const data = await res.json();
//         const rate = data.rates[toCurr.value];
//         if (!rate) throw new Error("Rate not found");
//         const converted = (amount * rate).toFixed(2);
//         msg.textContent = `${amount} ${fromCurr.value} = ${converted} ${toCurr.value}`;
//     } catch (err) {
//         msg.textContent = "Error fetching conversion rate.";
//         console.error(err);
//     }
// });
