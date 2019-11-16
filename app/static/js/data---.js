var data = [
    {
        "case_code": "criminal2019SCC47",
        "case_name": "R. v. Poulin",
        "criminal_or_tax": "criminal",
        "top_tfidf": "punishment, poulin, sentencing, offender, global",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/17964/index.do"
    },
    {
        "case_code": "tax[2016] 1 SCR 336",
        "case_name": "Canada (Attorney General) v. Chambre des notaires du Qu\u00e9bec",
        "criminal_or_tax": "tax",
        "top_tfidf": "secrecy, professional, notaries, notary, client",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15989/index.do"
    },
    {
        "case_code": "criminal2019SCC44",
        "case_name": "Denis v. C\u00f4t\u00e9",
        "criminal_or_tax": "criminal",
        "top_tfidf": "journalistic, 39.1, journalist, disclosure, denis",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/17946/index.do"
    },
    {
        "case_code": "tax[2016] 1 SCR 381",
        "case_name": "Canada (National Revenue) v. Thompson",
        "criminal_or_tax": "tax",
        "top_tfidf": "solicitor-client, privilege, thompson, privileged, records",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15990/index.do"
    },
    {
        "case_code": "criminal2019SCC41",
        "case_name": "R. v. R.V.",
        "criminal_or_tax": "criminal",
        "top_tfidf": "complainant, cross-examination, sexual, pregnancy, r.v.",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/17892/index.do"
    },
    {
        "case_code": "tax[2013] 3 SCR 191",
        "case_name": "Envision Credit Union v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "amalgamation, envision, cuia, unions, credit",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13263/index.do"
    },
    {
        "case_code": "criminal2019SCC39",
        "case_name": "R. v. Penunsi",
        "criminal_or_tax": "criminal",
        "top_tfidf": "bond, peace, defendant, 810.2, penunsi",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/17862/index.do"
    },
    {
        "case_code": "tax[2013] 2 SCR 336",
        "case_name": "Daishowa\u2011Marubeni International Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "reforestation, tenure, timber, tolko, obligations",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13071/index.do"
    },
    {
        "case_code": "criminal2019SCC38",
        "case_name": "R. v. Goldfinch",
        "criminal_or_tax": "criminal",
        "top_tfidf": "goldfinch, sexual, complainant, activity, jury",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/17848/index.do"
    },
    {
        "case_code": "tax[2012] 3 SCR 3",
        "case_name": "Canada v. GlaxoSmithKline Inc.",
        "criminal_or_tax": "tax",
        "top_tfidf": "glaxo, ranitidine, prices, adechsa, licence",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12613/index.do"
    },
    {
        "case_code": "criminal2019SCC33",
        "case_name": "R. v. Barton",
        "criminal_or_tax": "criminal",
        "top_tfidf": "barton, gladue, sexual, jury, consent",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/17800/index.do"
    },
    {
        "case_code": "tax[2012] 2 SCR 489",
        "case_name": "Canada v. Craig",
        "criminal_or_tax": "tax",
        "top_tfidf": "farming, moldowan, income, source, gunn",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/10004/index.do"
    },
    {
        "case_code": "criminal2019SCC18",
        "case_name": "R. v. Myers",
        "criminal_or_tax": "criminal",
        "top_tfidf": "detention, myers, custody, bail, accused",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/17634/index.do"
    },
    {
        "case_code": "tax[2012] 1 SCR 689",
        "case_name": "Calgary (City) v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "transit, supply, city, supplies, facilities",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/8007/index.do"
    },
    {
        "case_code": "criminal2019SCC10",
        "case_name": "R. v. Jarvis",
        "criminal_or_tax": "criminal",
        "top_tfidf": "privacy, recording, students, jarvis, expectation",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/17515/index.do"
    },
    {
        "case_code": "tax[2012] 1 SCR 520",
        "case_name": "Fundy Settlement v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "trusts, trustee, trust, residence, resident",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/8001/index.do"
    },
    {
        "case_code": "criminal2019SCC7",
        "case_name": "R. v. Bird",
        "criminal_or_tax": "criminal",
        "top_tfidf": "bird, residency, maybrun, ltso, 134.1",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/17514/index.do"
    },
    {
        "case_code": "tax[2012] 1 SCR 3",
        "case_name": "Toronto-Dominion Bank v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "toronto-dominion, insolvency, 33878, bankruptcy, bank",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/7986/index.do"
    },
    {
        "case_code": "criminal2019SCC6",
        "case_name": "R. v. Calnen",
        "criminal_or_tax": "criminal",
        "top_tfidf": "calnen, jordan, after-the-fact, jury, propensity",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/17504/index.do"
    },
    {
        "case_code": "tax[2011] 3 SCR 721",
        "case_name": "Copthorne Holdings Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "copthorne, vhhc, shares, holdings, amalgamation",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/7981/index.do"
    },
    {
        "case_code": "criminal2017SCC38",
        "case_name": "R. v. George",
        "criminal_or_tax": "criminal",
        "top_tfidf": "sexual, c.d., george, complainant, activity",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/16723/index.do"
    },
    {
        "case_code": "tax[2011] 2 SCR 710",
        "case_name": "Bastien Estate v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "reserve, indian, indians, location, bastien",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/7953/index.do"
    },
    {
        "case_code": "criminal2017SCC37",
        "case_name": "R. v. Alex",
        "criminal_or_tax": "criminal",
        "top_tfidf": "breath, rilling, shortcuts, sample, samples",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/16714/index.do"
    },
    {
        "case_code": "tax[2011] 2 SCR 764",
        "case_name": "Dub\u00e9 v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "reserve, bastien, dub\u00e9, caisse, indian",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/7954/index.do"
    },
    {
        "case_code": "criminal2017SCC35",
        "case_name": "R. v. Bradshaw",
        "criminal_or_tax": "criminal",
        "top_tfidf": "thielen, bradshaw, hearsay, reliability, murders",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/16702/index.do"
    },
    {
        "case_code": "tax[2011] 2 SCR 635",
        "case_name": "Canada Trustco Mortgage Co. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "cheque, bank, drawee, payee, cheques",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/7951/index.do"
    },
    {
        "case_code": "criminal2017SCC27",
        "case_name": "R. v. Antic",
        "criminal_or_tax": "criminal",
        "top_tfidf": "bail, release, antic, cash, surety",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/16649/index.do"
    },
    {
        "case_code": "tax[2009] 2 SCR 94",
        "case_name": "Caisse populaire Desjardins de l'Est de Drummond v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "caisse, camvrac, compensation, deposit, security",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/7793/index.do"
    },
    {
        "case_code": "criminal2017SCC26",
        "case_name": "Quebec (Director of Criminal and Penal Prosecutions) v. Jodoin",
        "criminal_or_tax": "criminal",
        "top_tfidf": "motions, lawyer, jodoin, writs, personally",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/16628/index.do"
    },
    {
        "case_code": "tax[2009] 1 SCR 657",
        "case_name": "United Parcel Service Canada Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "rebate, overpayment, 215.1, overpayments, consignees",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/7614/index.do"
    },
    {
        "case_code": "criminal2017SCC17",
        "case_name": "R. v. Oland",
        "criminal_or_tax": "criminal",
        "top_tfidf": "oland, bail, reviewability, enforceability, public",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/16486/index.do"
    },
    {
        "case_code": "tax[2009] 1 SCR 3",
        "case_name": "Lipson v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "lipson, gaar, 74.1, 74.5, attribution",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2670/index.do"
    },
    {
        "case_code": "criminal2017SCC15",
        "case_name": "R. v. Paterson",
        "criminal_or_tax": "criminal",
        "top_tfidf": "exigent, roaches, police, warrantless, entry",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/16484/index.do"
    },
    {
        "case_code": "tax[2008] 2 SCR 643",
        "case_name": "Redeemer Foundation v. Canada (National Revenue)",
        "criminal_or_tax": "tax",
        "top_tfidf": "231.2, donors, audit, unnamed, records",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/4235/index.do"
    },
    {
        "case_code": "criminal2016SCC43",
        "case_name": "R. v. Anthony\u2011Cook",
        "criminal_or_tax": "criminal",
        "top_tfidf": "joint, sentence, plea, submission, sentencing",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/16201/index.do"
    },
    {
        "case_code": "tax[2008] 2 SCR 79",
        "case_name": "Canada v. McLarty",
        "criminal_or_tax": "tax",
        "top_tfidf": "mclarty, compton, data, seismic, promissory",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/4636/index.do"
    },
    {
        "case_code": "criminal2016SCC33",
        "case_name": "R. v. Villaroman",
        "criminal_or_tax": "criminal",
        "top_tfidf": "circumstantial, computer, pornography, villaroman, inferences",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/16078/index.do"
    },
    {
        "case_code": "tax[2007] 3 SCR 217",
        "case_name": "A.Y.S.A. Amateur Youth Soccer Association v. Canada (Revenue Agency)",
        "criminal_or_tax": "tax",
        "top_tfidf": "charitable, amateur, rcaaa, charity, sports",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2383/index.do"
    },
    {
        "case_code": "criminal2016SCC32",
        "case_name": "R. v. Cawthorne",
        "criminal_or_tax": "criminal",
        "top_tfidf": "martial, cawthorne, military, mistrial, prosecutorial",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/16070/index.do"
    },
    {
        "case_code": "tax[2007] 2 SCR 793",
        "case_name": "Canada v. Addison & Leyen Ltd.",
        "criminal_or_tax": "tax",
        "top_tfidf": "york, respondents, addison, leyen, 18.5",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2373/index.do"
    },
    {
        "case_code": "criminal2016SCC22",
        "case_name": "R. v. D.L.W.",
        "criminal_or_tax": "criminal",
        "top_tfidf": "bestiality, penetration, buggery, animal, sexual",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15991/index.do"
    },
    {
        "case_code": "tax[2007] 1 SCR 853",
        "case_name": "Dunne v. Quebec (Deputy Minister of Revenue)",
        "criminal_or_tax": "tax",
        "top_tfidf": "partnership, dunne, retirement, quebec, allowance",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2357/index.do"
    },
    {
        "case_code": "criminal2016SCC11",
        "case_name": "R. v. Borowiec",
        "criminal_or_tax": "criminal",
        "top_tfidf": "infanticide, disturbed, birth, disturbance, lactation",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15824/index.do"
    },
    {
        "case_code": "tax[2006] 2 SCR 447",
        "case_name": "Imperial Oil Ltd. v. Canada; Inco Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "foreign, currency, discounts, exchange, inco",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2320/index.do"
    },
    {
        "case_code": "criminal2015SCC65",
        "case_name": "R. v. Riesberry",
        "criminal_or_tax": "criminal",
        "top_tfidf": "riesberry, cheating, horse, game, fraud",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15682/index.do"
    },
    {
        "case_code": "tax[2006] 1 SCR 715",
        "case_name": "Placer Dome Canada Ltd. v. Ontario (Minister of Finance)",
        "criminal_or_tax": "tax",
        "top_tfidf": "hedging, output, mine, mining, delivery",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2292/index.do"
    },
    {
        "case_code": "criminal2015SCC64",
        "case_name": "R. v. Lacasse",
        "criminal_or_tax": "criminal",
        "top_tfidf": "sentence, sentencing, driving, sentences, aggravating",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15680/index.do"
    },
    {
        "case_code": "tax[2005] 2 SCR 601",
        "case_name": "Canada Trustco Mortgage Co. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "ctmc, gaar, avoidance, trailers, transaction",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2288/index.do"
    },
    {
        "case_code": "criminal2015SCC40",
        "case_name": "R. v. Simpson",
        "criminal_or_tax": "criminal",
        "top_tfidf": "colour, simpson, farrell, arcand, space",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15477/index.do"
    },
    {
        "case_code": "tax[2005] 2 SCR 643",
        "case_name": "Mathew v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "partnership, losses, osfc, appellants, transferor",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2289/index.do"
    },
    {
        "case_code": "criminal2015SCC38",
        "case_name": "R. v. Rodgerson",
        "criminal_or_tax": "criminal",
        "top_tfidf": "rodgerson, jury, clean-up, concealment, young",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15456/index.do"
    },
    {
        "case_code": "tax[2005] 2 SCR 598",
        "case_name": "Moufarr\u00e8ge v. Quebec (Deputy Minister of Revenue)",
        "criminal_or_tax": "tax",
        "top_tfidf": "moufarr\u00e8ge, 30382, r.s.q., deputy, loan",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2287/index.do"
    },
    {
        "case_code": "criminal2015SCC33",
        "case_name": "R. v. Tatton",
        "criminal_or_tax": "criminal",
        "top_tfidf": "intoxication, tatton, fire, arson, daviault",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15397/index.do"
    },
    {
        "case_code": "tax[2005] 1 SCR 113",
        "case_name": "Tsiaprailis v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "tsiaprailis, lump, settlement, disability, insurance",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2208/index.do"
    },
    {
        "case_code": "criminal2015SCC29",
        "case_name": "R. v. Barabash",
        "criminal_or_tax": "criminal",
        "top_tfidf": "exploitation, sexual, sharpe, recording, private",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15374/index.do"
    },
    {
        "case_code": "tax[2004] 1 SCR 411",
        "case_name": "Gifford v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "capital, bentley, payment, interest, gifford",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2127/index.do"
    },
    {
        "case_code": "criminal2015SCC27",
        "case_name": "R. v. St-Cloud",
        "criminal_or_tax": "criminal",
        "top_tfidf": "detention, release, lavergne, bail, unexplainable",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15358/index.do"
    },
    {
        "case_code": "tax[2003] 1 SCR 94",
        "case_name": "Markevich v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "collection, limitation, clpa, action, debt",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2039/index.do"
    },
    {
        "case_code": "criminal2015SCC26",
        "case_name": "Bowden Institution v. Khadr",
        "criminal_or_tax": "criminal",
        "top_tfidf": "khadr, bowden, amnesty, pelham, eight-year",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15359/index.do"
    },
    {
        "case_code": "tax[2002] 3 SCR 757",
        "case_name": "R. v. Jarvis",
        "criminal_or_tax": "tax",
        "top_tfidf": "goy-edwards, audit, 231.2, 231.1, auditor",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2015/index.do"
    },
    {
        "case_code": "criminal35548",
        "case_name": "Canada (Attorney General) v. Barnaby",
        "criminal_or_tax": "criminal",
        "top_tfidf": "appel, chef, juge, 1305, barnaby",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/15307/index.do"
    },
    {
        "case_code": "tax[2002] 3 SCR 814",
        "case_name": "R. v. Ling",
        "criminal_or_tax": "tax",
        "top_tfidf": "audit, auditors, pacheco, jarvis, meeting",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2016/index.do"
    },
    {
        "case_code": "criminal2015SCC11",
        "case_name": "R. v. Araya",
        "criminal_or_tax": "criminal",
        "top_tfidf": "araya, browne, photographs, jury, assailants",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14692/index.do"
    },
    {
        "case_code": "tax[2002] 2 SCR 720",
        "case_name": "First Vancouver Finance v. M.R.N.",
        "criminal_or_tax": "tax",
        "top_tfidf": "trust, debtor, deemed, property, safeway",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1989/index.do"
    },
    {
        "case_code": "criminal2015SCC9",
        "case_name": "R. v. Grant",
        "criminal_or_tax": "criminal",
        "top_tfidf": "suspect, seaboyer, unknown, defence-led, probative",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14676/index.do"
    },
    {
        "case_code": "tax[2002] 2 SCR 645",
        "case_name": "Stewart v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "profit, expectation, reop, source, income",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1986/index.do"
    },
    {
        "case_code": "criminal2015SCC8",
        "case_name": "R. v. Perrone",
        "criminal_or_tax": "criminal",
        "top_tfidf": "perrone, 36021, cladinoro, 2015, manitoba",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14645/index.do"
    },
    {
        "case_code": "tax[2002] 2 SCR 684",
        "case_name": "Walls v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "storage, partnership, fspl, mini-warehouse, respondents",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1987/index.do"
    },
    {
        "case_code": "criminal2015SCC6",
        "case_name": "R. v. Goleski",
        "criminal_or_tax": "criminal",
        "top_tfidf": "goleski, 35862, 2015, excuse, breath",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14638/index.do"
    },
    {
        "case_code": "tax[2001] 3 SCR 5",
        "case_name": "Autobus Thomas Inc. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "autobus, thomas, 2001, reassessments, gonthier",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1904/index.do"
    },
    {
        "case_code": "criminal2014SCC75",
        "case_name": "R. v. Wilcox",
        "criminal_or_tax": "criminal",
        "top_tfidf": "wilcox, sida, organismes, lutte, communautaires",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14501/index.do"
    },
    {
        "case_code": "tax[2001] 2 SCR 1082",
        "case_name": "Ludco Enterprises Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "income, companies, ludco, borrowed, shares",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1902/index.do"
    },
    {
        "case_code": "criminal2014SCC72",
        "case_name": "Wakeling v. United States of America",
        "criminal_or_tax": "criminal",
        "top_tfidf": "disclosure, wakeling, privacy, wiretap, intercepted",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14439/index.do"
    },
    {
        "case_code": "tax[2001] 2 SCR 1046",
        "case_name": "Singleton v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "borrowed, money, firm, 300,000, refinance",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1901/index.do"
    },
    {
        "case_code": "criminal2014SCC69",
        "case_name": "R. v. Dunn",
        "criminal_or_tax": "criminal",
        "top_tfidf": "dunn, firearm, 35599, weapon, friedman",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14429/index.do"
    },
    {
        "case_code": "tax[2001] 1 SCR 367",
        "case_name": "Backman v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "partnership, canadians, profit, partners, continental",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1846/index.do"
    },
    {
        "case_code": "criminal2014SCC63",
        "case_name": "R. v. Mohamed",
        "criminal_or_tax": "criminal",
        "top_tfidf": "mohamed, 35644, marihuana, samir, beaver",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14385/index.do"
    },
    {
        "case_code": "tax[2001] 1 SCR 391",
        "case_name": "Spire Freezers Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "partnership, tremont, backman, spire, partners",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1847/index.do"
    },
    {
        "case_code": "criminal2014SCC61",
        "case_name": "R. v. Steele",
        "criminal_or_tax": "criminal",
        "top_tfidf": "violence, spio, subpara, offender, robbery",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14383/index.do"
    },
    {
        "case_code": "tax[2000] 1 SCR 915",
        "case_name": "Will-Kare Paving & Contracting Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "asphalt, processing, plant, manufacturing, will-kare",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1799/index.do"
    },
    {
        "case_code": "criminal2014SCC60",
        "case_name": "R. v. Conception",
        "criminal_or_tax": "criminal",
        "top_tfidf": "hospital, treatment, 672.58, consent, 672.62",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14376/index.do"
    },
    {
        "case_code": "tax[1999] 3 SCR 804",
        "case_name": "65302 British Columbia Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "over-quota, fines, levy, levies, marketing",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1753/index.do"
    },
    {
        "case_code": "criminal2014SCC58",
        "case_name": "R. v. Mack",
        "criminal_or_tax": "criminal",
        "top_tfidf": "argueta, levoir, confessions, undercover, jury",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14355/index.do"
    },
    {
        "case_code": "tax[1999] 3 SCR 622",
        "case_name": "Shell Canada Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "shell, lenders, foreign, exchange, debenture",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1745/index.do"
    },
    {
        "case_code": "criminal2014SCC54",
        "case_name": "R. v. Mian",
        "criminal_or_tax": "criminal",
        "top_tfidf": "mian, werth, detective, malibu, appellate",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14351/index.do"
    },
    {
        "case_code": "tax[1999] 1 SCR 10",
        "case_name": "Vancouver Society of Immigrant and Visible Minority Women v. M.N.R.",
        "criminal_or_tax": "tax",
        "top_tfidf": "charitable, charity, organization, pemsel, society",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1676/index.do"
    },
    {
        "case_code": "criminal2014SCC52",
        "case_name": "R. v. Hart",
        "criminal_or_tax": "criminal",
        "top_tfidf": "confessions, confession, self-incrimination, undercover, hart",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14301/index.do"
    },
    {
        "case_code": "tax[1999] 1 SCR 3",
        "case_name": "Del Zotto v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "231.4, zotto, charter, noble, freedoms",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1673/index.do"
    },
    {
        "case_code": "criminal2014SCC47",
        "case_name": "R. v. Sipos",
        "criminal_or_tax": "criminal",
        "top_tfidf": "sipos, offender, sentencing, designation, fresh",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14273/index.do"
    },
    {
        "case_code": "tax[1998] 2 SCR 298",
        "case_name": "Continental Bank Leasing Corp. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "partnership, leasing, bank, partnerships, illegality",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1644/index.do"
    },
    {
        "case_code": "criminal2014SCC46",
        "case_name": "R. v. Quesnelle",
        "criminal_or_tax": "criminal",
        "top_tfidf": "occurrence, privacy, mills, 278.1, reports",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14272/index.do"
    },
    {
        "case_code": "tax[1998] 2 SCR 358",
        "case_name": "Continental Bank of Canada v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "leasing, bank, partnership, recapture, capital",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1645/index.do"
    },
    {
        "case_code": "criminal2014SCC30",
        "case_name": "R. v. Jackson",
        "criminal_or_tax": "criminal",
        "top_tfidf": "jackson, 35622, karaksatsanis, 2014, gillese",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13615/index.do"
    },
    {
        "case_code": "tax[1998] 1 SCR 795",
        "case_name": "Duha Printers (Western) Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "duha, jure, marr, directors, shareholders",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1619/index.do"
    },
    {
        "case_code": "criminal2014SCC27",
        "case_name": "R. v. Carvery",
        "criminal_or_tax": "criminal",
        "top_tfidf": "credit, pre-sentence, sentencing, remission, enhanced",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13587/index.do"
    },
    {
        "case_code": "tax[1998] 1 SCR 770",
        "case_name": "Neuman v. M.N.R.",
        "criminal_or_tax": "tax",
        "top_tfidf": "dividend, mcclurg, neuman, shares, melru",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1618/index.do"
    },
    {
        "case_code": "criminal2014SCC28",
        "case_name": "R. v. Clarke",
        "criminal_or_tax": "criminal",
        "top_tfidf": "sentencing, clarke, charter, pre-sentence, truth",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13588/index.do"
    },
    {
        "case_code": "tax[1998] 1 SCR 147",
        "case_name": "Canderel Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "tips, well-accepted, canderel, matching, picture",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1590/index.do"
    },
    {
        "case_code": "criminal2014SCC26",
        "case_name": "R. v. Summers",
        "criminal_or_tax": "criminal",
        "top_tfidf": "credit, parole, enhanced, pre-sentence, release",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13586/index.do"
    },
    {
        "case_code": "tax[1998] 1 SCR 220",
        "case_name": "Hall v. Quebec (Deputy Minister of Revenue)",
        "criminal_or_tax": "tax",
        "top_tfidf": "seizin, executor, testamentary, legatee, testator",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1594/index.do"
    },
    {
        "case_code": "criminal2014SCC23",
        "case_name": "R. v. Leinen",
        "criminal_or_tax": "criminal",
        "top_tfidf": "leinen, 35531, molle, ruttan, kevin",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13560/index.do"
    },
    {
        "case_code": "tax[1998] 1 SCR 196",
        "case_name": "Ikea Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "ikea, lease, receipt, capital, income",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1592/index.do"
    },
    {
        "case_code": "criminal2014SCC22",
        "case_name": "R. v. Vokurka",
        "criminal_or_tax": "criminal",
        "top_tfidf": "vokurka, 35510, buckingham, accident, inflicted",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13561/index.do"
    },
    {
        "case_code": "tax[1998] 1 SCR 183",
        "case_name": "Toronto College Park Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "tips, tcpl, canderel, expenses, amortization",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1591/index.do"
    },
    {
        "case_code": "criminal2014SCC19",
        "case_name": "R. v. Hutchinson",
        "criminal_or_tax": "criminal",
        "top_tfidf": "sexual, condom, 273.1, consent, complainant",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13511/index.do"
    },
    {
        "case_code": "tax[1997] 2 SCR 336",
        "case_name": "Hickman Motors Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "hickman, equipment, motors, income, 1102",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1524/index.do"
    },
    {
        "case_code": "criminal2014SCC16",
        "case_name": "R. v. Babos",
        "criminal_or_tax": "criminal",
        "top_tfidf": "piccirilli, stay, tremblay, babos, threats",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13487/index.do"
    },
    {
        "case_code": "tax[1996] 2 SCR 161",
        "case_name": "R. v.  Mara Properties Ltd.",
        "criminal_or_tax": "tax",
        "top_tfidf": "mara, 5168, 1449, 3189, properties",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1382/index.do"
    },
    {
        "case_code": "criminal2014SCC18",
        "case_name": "R. v. Hogg",
        "criminal_or_tax": "criminal",
        "top_tfidf": "35504, island, hogg, charlottetown, p.e.i.j",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13503/index.do"
    },
    {
        "case_code": "tax[1996] 1 SCR 963",
        "case_name": "Alberta (Treasury Branches) v. M.N.R.; Toronto-Dominion Bank v. M.N.R.",
        "criminal_or_tax": "tax",
        "top_tfidf": "debts, assignment, gabd, book, debtor",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1375/index.do"
    },
    {
        "case_code": "criminal2014SCC17",
        "case_name": "R. v. Waite",
        "criminal_or_tax": "criminal",
        "top_tfidf": "waite, co-accused, 35499, murder, jury",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13504/index.do"
    },
    {
        "case_code": "tax[1996] 1 SCR 254",
        "case_name": "Schwartz v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "retiring, employment, schwartz, damages, dynacare",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1346/index.do"
    },
    {
        "case_code": "criminal2014SCC15",
        "case_name": "R. v. Sekhon",
        "criminal_or_tax": "criminal",
        "top_tfidf": "sekhon, cocaine, arsenault, expert, courier",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13486/index.do"
    },
    {
        "case_code": "tax[1996] 1 SCR 305",
        "case_name": "Tennant v. M.N.R.",
        "criminal_or_tax": "tax",
        "top_tfidf": "realwest, shares, borrowed, loan, teitelbaum",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1347/index.do"
    },
    {
        "case_code": "criminal2014SCC14",
        "case_name": "R. v. Flaviano",
        "criminal_or_tax": "criminal",
        "top_tfidf": "flaviano, 35488, hepner, vittorio, 273.2",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13485/index.do"
    },
    {
        "case_code": "tax[1996] 1 SCR 73",
        "case_name": "Swantje v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "swantje, dancause, paul, 1994",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1338/index.do"
    },
    {
        "case_code": "criminal2014SCC10",
        "case_name": "R. v. Yelle",
        "criminal_or_tax": "criminal",
        "top_tfidf": "yelle, 35361, carswellnwt, n.w.t.j, yellowknife",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13429/index.do"
    },
    {
        "case_code": "tax[1995] 3 SCR 103",
        "case_name": "Friesen v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "inventory, valuation, adventure, income, business",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1288/index.do"
    },
    {
        "case_code": "criminal2014SCC6",
        "case_name": "R. v. Auclair",
        "criminal_or_tax": "criminal",
        "top_tfidf": "claude, sylvain, \u00e9ric, brunton, michel",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13426/index.do"
    },
    {
        "case_code": "tax[1995] 2 SCR 802",
        "case_name": "Crown Forest Industries Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "norsk, convention, u.s., united, article",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1271/index.do"
    },
    {
        "case_code": "criminal2013SCC68",
        "case_name": "R. v. McRae",
        "criminal_or_tax": "criminal",
        "top_tfidf": "threats, conveyed, fault, uttered, threat",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13371/index.do"
    },
    {
        "case_code": "tax[1994] 3 SCR 29",
        "case_name": "Buanderie centrale de Montr\u00e9al Inc. v. Montreal (City); Conseil de la sant\u00e9 et des services sociaux de la r\u00e9gion de Montr\u00e9al m\u00e9tropolitain v. Montreal (City)",
        "criminal_or_tax": "tax",
        "top_tfidf": "buanderie, establishments, regional, roll, council",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1170/index.do"
    },
    {
        "case_code": "criminal2013SCC61",
        "case_name": "R. v. Hay",
        "criminal_or_tax": "criminal",
        "top_tfidf": "maillard, hair, eyewitness, eunick, jury",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13328/index.do"
    },
    {
        "case_code": "tax[1994] 3 SCR 57",
        "case_name": "Partagec Inc. v. Qu\u00e9bec (Communaut\u00e9 urbaine)",
        "criminal_or_tax": "tax",
        "top_tfidf": "partagec, buanderie, centrale, qu\u00e9bec, urbaine",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1171/index.do"
    },
    {
        "case_code": "criminal2013SCC55",
        "case_name": "R. v. Cairney",
        "criminal_or_tax": "criminal",
        "top_tfidf": "provocation, cairney, ferguson, self-control, rosenthal",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13308/index.do"
    },
    {
        "case_code": "tax[1994] 3 SCR 3",
        "case_name": "Qu\u00e9bec (Communaut\u00e9 urbaine) v. Corp. Notre-Dame de Bon-Secours",
        "criminal_or_tax": "tax",
        "top_tfidf": "champenoise, reception, a.h.s.s.s, bref, centre",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1169/index.do"
    },
    {
        "case_code": "criminal2013SCC56",
        "case_name": "R. v. Pappas",
        "criminal_or_tax": "criminal",
        "top_tfidf": "pappas, kullman, provocation, jury, extortion",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13309/index.do"
    },
    {
        "case_code": "tax[1994] 2 SCR 312",
        "case_name": "Canada v. Antosko",
        "criminal_or_tax": "tax",
        "top_tfidf": "accrued, transferor, transfer, appellants, transferee",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1140/index.do"
    },
    {
        "case_code": "criminal2013SCC54",
        "case_name": "R. v. R.L.",
        "criminal_or_tax": "criminal",
        "top_tfidf": "34871, r.l., extension, chamberland, dalphond",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13307/index.do"
    },
    {
        "case_code": "tax[1993] 4 SCR 695",
        "case_name": "Symes v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "child, expenses, care, women, expense",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1093/index.do"
    },
    {
        "case_code": "criminal2013SCC41",
        "case_name": "R. v. Youvarajah",
        "criminal_or_tax": "criminal",
        "top_tfidf": "reliability, d.s., solicitor-client, plea, privilege",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13185/index.do"
    },
    {
        "case_code": "tax[1993] 4 SCR 285",
        "case_name": "Friedberg v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "friedberg, unincurred, futures, losses, income",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1078/index.do"
    },
    {
        "case_code": "criminal2013SCC38",
        "case_name": "R. v. Vuradin",
        "criminal_or_tax": "criminal",
        "top_tfidf": "complainant, denial, vuradin, r.e.m., dinardo",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13146/index.do"
    },
    {
        "case_code": "tax[1993] 3 SCR 430",
        "case_name": "Slattery (Trustee of) v. Slattery",
        "criminal_or_tax": "tax",
        "top_tfidf": "bankruptcy, slattery, glover, trustee, enforcement",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1052/index.do"
    },
    {
        "case_code": "criminal2013SCC35",
        "case_name": "R. v. Baldree",
        "criminal_or_tax": "criminal",
        "top_tfidf": "hearsay, baldree, declarant, caller, reliability",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13136/index.do"
    },
    {
        "case_code": "tax[1993] 2 SCR 53",
        "case_name": "Kourtessis v. M.N.R.",
        "criminal_or_tax": "tax",
        "top_tfidf": "231.3, declaration, procedure, search, knox",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/995/index.do"
    },
    {
        "case_code": "criminal2013SCC32",
        "case_name": "R. v. Gauthier",
        "criminal_or_tax": "criminal",
        "top_tfidf": "abandonment, defence, jury, whitehouse, pact",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13098/index.do"
    },
    {
        "case_code": "tax[1993] 1 SCR 895",
        "case_name": "Sie-Mac Pipeline Contractors Ltd. v. M.N.R.",
        "criminal_or_tax": "tax",
        "top_tfidf": "c.t.c, d.t.c",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/980/index.do"
    },
    {
        "case_code": "criminal2013SCC31",
        "case_name": "R. v. Ibanescu",
        "criminal_or_tax": "criminal",
        "top_tfidf": "straddle, ibanescu, blood, alcohol, gibson",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13084/index.do"
    },
    {
        "case_code": "tax[1993] 1 SCR 416",
        "case_name": "Baron v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "231.3, search, warrant, hunter, kourtessis",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/958/index.do"
    },
    {
        "case_code": "criminal2013SCC28",
        "case_name": "R. v. A.D.H.",
        "criminal_or_tax": "criminal",
        "top_tfidf": "child, fault, abandonment, subjective, necessaries",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13051/index.do"
    },
    {
        "case_code": "tax[1992] 1 SCR 877",
        "case_name": "Williams v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "indian, unemployment, benefits, reserve, situs",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/866/index.do"
    },
    {
        "case_code": "criminal2013SCC27",
        "case_name": "R. v. Buzizi",
        "criminal_or_tax": "criminal",
        "top_tfidf": "provocation, cousin, knife, defence, victim",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13039/index.do"
    },
    {
        "case_code": "tax[1991] 1 SCR 907",
        "case_name": "Soci\u00e9t\u00e9 Nationale de Fiducie v. Quebec (Deputy Minister of Revenue)",
        "criminal_or_tax": "tax",
        "top_tfidf": "fiducie, nationale, godin, soci\u00e9t\u00e9, ouellette",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/751/index.do"
    },
    {
        "case_code": "criminal2013SCC25",
        "case_name": "R. v. Levkovic",
        "criminal_or_tax": "criminal",
        "top_tfidf": "born, birth, child, fetus, alive",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/13031/index.do"
    },
    {
        "case_code": "tax[1990] 3 SCR 1020",
        "case_name": "Mcclurg v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "dividend, dividends, directors, shares, mcclurg",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/699/index.do"
    },
    {
        "case_code": "criminal2013SCC24",
        "case_name": "R. v. G.M.",
        "criminal_or_tax": "criminal",
        "top_tfidf": "34952, g.m., convictions, labrador, incest",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12995/index.do"
    },
    {
        "case_code": "tax[1990] 2 SCR 1322",
        "case_name": "Canada v. Fries",
        "criminal_or_tax": "tax",
        "top_tfidf": "fries, c.t.c, d.t.c",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/673/index.do"
    },
    {
        "case_code": "criminal2013SCC22",
        "case_name": "R. v. W.H.",
        "criminal_or_tax": "criminal",
        "top_tfidf": "complainant, jury, inconsistencies, verdict, credibility",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12993/index.do"
    },
    {
        "case_code": "tax[1990] 2 SCR 338",
        "case_name": "Knox Contracting Ltd. v. Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "231.3, search, warrants, criminal, jurisdiction",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/635/index.do"
    },
    {
        "case_code": "criminal2013SCC20",
        "case_name": "R. v. L\u00e9vesque",
        "criminal_or_tax": "criminal",
        "top_tfidf": "l\u00e9vesque, 34417, accessory, confusing, jury",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12992/index.do"
    },
    {
        "case_code": "tax[1990] 1 SCR 627",
        "case_name": "R. v. McKinlay Transport Ltd.",
        "criminal_or_tax": "tax",
        "top_tfidf": "seizure, hunter, privacy, documents, charter",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/585/index.do"
    },
    {
        "case_code": "criminal2013SCC21",
        "case_name": "R. v. Murphy",
        "criminal_or_tax": "criminal",
        "top_tfidf": "murphy, 34980, scotia, nova, murder",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12991/index.do"
    },
    {
        "case_code": "tax[1989] 1 SCR 1161",
        "case_name": "Air Canada v. British Columbia",
        "criminal_or_tax": "tax",
        "top_tfidf": "airlines, gasoline, vires, ultra, province",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/454/index.do"
    },
    {
        "case_code": "criminal2013SCC17",
        "case_name": "R. v. Mailhot",
        "criminal_or_tax": "criminal",
        "top_tfidf": "mailhot, 34881, 2013, opinions, theory",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12937/index.do"
    },
    {
        "case_code": "tax[1989] 1 SCR 1133",
        "case_name": "Canadian Pacific Air Lines Ltd. v. British Columbia",
        "criminal_or_tax": "tax",
        "top_tfidf": "airlines, aircraft, province, airspace, beverages",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/452/index.do"
    },
    {
        "case_code": "criminal2013SCC16",
        "case_name": "R. v. TELUS Communications Co.",
        "criminal_or_tax": "criminal",
        "top_tfidf": "telus, interception, 487.01, messages, warrant",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12936/index.do"
    },
    {
        "case_code": "tax[1988] 2 SCR 175",
        "case_name": "Mattabi Mines Ltd. v. Ontario (Minister of Revenue)",
        "criminal_or_tax": "tax",
        "top_tfidf": "mattabi, income, robins, 1974, fiscal",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/364/index.do"
    },
    {
        "case_code": "criminal2013SCC15",
        "case_name": "R. v. Pham",
        "criminal_or_tax": "criminal",
        "top_tfidf": "sentence, sentencing, immigration, collateral, offender",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12904/index.do"
    },
    {
        "case_code": "tax[1987] 2 SCR 755",
        "case_name": "R. v. Grimwood",
        "criminal_or_tax": "tax",
        "top_tfidf": "grimwood, mckinnon, 1987",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/285/index.do"
    },
    {
        "case_code": "criminal2013SCC12",
        "case_name": "R. v. J.F.",
        "criminal_or_tax": "criminal",
        "top_tfidf": "conspiracy, trieu, conspirators, mcnamara, party",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12877/index.do"
    },
    {
        "case_code": "tax[1987] 1 SCR 706",
        "case_name": "Restaurant Le Cl\u00e9menceau Inc. v. Drouin",
        "criminal_or_tax": "tax",
        "top_tfidf": "evocation, minist\u00e8re, revenu, writ, sessions",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/6276/index.do"
    },
    {
        "case_code": "criminal2013SCC9",
        "case_name": "R. v. Named Person B",
        "criminal_or_tax": "criminal",
        "top_tfidf": "informer, confidential, police, co-operating, promise",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12864/index.do"
    },
    {
        "case_code": "tax[1987] 1 SCR 32",
        "case_name": "Bronfman Trust v. The Queen",
        "criminal_or_tax": "tax",
        "top_tfidf": "borrowed, ineligible, trust, bronfman, money",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/191/index.do"
    },
    {
        "case_code": "criminal2013SCC10",
        "case_name": "R. v. Taylor",
        "criminal_or_tax": "criminal",
        "top_tfidf": "taylor, labrador, garfield, 34934, newfoundland",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12865/index.do"
    },
    {
        "case_code": "tax[1986] 2 SCR 522",
        "case_name": "Canadian Marconi v. R.",
        "criminal_or_tax": "tax",
        "top_tfidf": "business, marconi, investment, strategy, presumption",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/176/index.do"
    },
    {
        "case_code": "criminal2013SCC8",
        "case_name": "R. v. Blacklaws",
        "criminal_or_tax": "criminal",
        "top_tfidf": "blacklaws, 34889, severance, fredrick, sever",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12856/index.do"
    },
    {
        "case_code": "tax[1986] 2 SCR 509",
        "case_name": "Ensite Ltd. v. R.",
        "criminal_or_tax": "tax",
        "top_tfidf": "ensite, philippines, philippine, dollar, deposits",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/175/index.do"
    },
    {
        "case_code": "criminal2013SCC7",
        "case_name": "R. v. B\u00e9langer",
        "criminal_or_tax": "criminal",
        "top_tfidf": "b\u00e9langer, baie-comeau, dufour, 34512, fr\u00e9d\u00e9rick",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12845/index.do"
    },
    {
        "case_code": "tax[1986] 1 SCR 264",
        "case_name": "Gagnon v. The Queen",
        "criminal_or_tax": "tax",
        "top_tfidf": "pascoe, recipient, alimony, allowance, marriage",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/125/index.do"
    },
    {
        "case_code": "criminal2012SCC75",
        "case_name": "R. v. Davey",
        "criminal_or_tax": "criminal",
        "top_tfidf": "jurors, jury, police, notations, prospective",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12780/index.do"
    },
    {
        "case_code": "tax[1986] 1 SCR 190",
        "case_name": "Bell Canada v. Consumers' Assoc. of Canada",
        "criminal_or_tax": "tax",
        "top_tfidf": "award, commission, indemnification, costs, napo",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/120/index.do"
    },
    {
        "case_code": "criminal2012SCC74",
        "case_name": "R. v. Emms",
        "criminal_or_tax": "criminal",
        "top_tfidf": "prospective, jurors, juror, selection, yumnu",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12781/index.do"
    },
    {
        "case_code": "tax[1986] 1 SCR 209",
        "case_name": "The Queen v. Golden et al.",
        "criminal_or_tax": "tax",
        "top_tfidf": "depreciable, property, skalbania, land, allowances",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/121/index.do"
    },
    {
        "case_code": "criminal2012SCC73",
        "case_name": "R. v. Yumnu",
        "criminal_or_tax": "criminal",
        "top_tfidf": "jury, juror, jurors, selection, vetting",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12782/index.do"
    },
    {
        "case_code": "tax[1985] 2 SCR 288",
        "case_name": "The Queen v. Imperial General Properties Ltd.",
        "criminal_or_tax": "tax",
        "top_tfidf": "shares, thornborrow, sauder, voting, gasner",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/88/index.do"
    },
    {
        "case_code": "criminal2012SCC72",
        "case_name": "R. v. N.S.",
        "criminal_or_tax": "criminal",
        "top_tfidf": "niqab, religious, witness, religion, wear",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12779/index.do"
    },
    {
        "case_code": "tax[1985] 2 SCR 46",
        "case_name": "Johns-Manville Canada v. The Queen",
        "criminal_or_tax": "tax",
        "top_tfidf": "mining, expenditures, expenditure, asset, capital",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/71/index.do"
    },
    {
        "case_code": "criminal2012SCC69",
        "case_name": "R. v. Khawaja",
        "criminal_or_tax": "criminal",
        "top_tfidf": "terrorist, 83.18, terrorism, 83.01, khyam",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12768/index.do"
    },
    {
        "case_code": "tax[1985] 1 SCR 849",
        "case_name": "Blais v. M.N.R.",
        "criminal_or_tax": "tax",
        "top_tfidf": "textiles, blais, bankrupt, louis, bankruptcy",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/66/index.do"
    },
    {
        "case_code": "criminal2012SCC63",
        "case_name": "R. v. D.J.W.",
        "criminal_or_tax": "criminal",
        "top_tfidf": "d.j.w, assault, weapon, aggravated, 34623",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12716/index.do"
    },
    {
        "case_code": "tax[1984] 1 SCR 614",
        "case_name": "James Richardson & Sons v. M.N.R.",
        "criminal_or_tax": "tax",
        "top_tfidf": "futures, traders, customers, commodities, demand",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/25/index.do"
    },
    {
        "case_code": "criminal2012SCC62",
        "case_name": "R. v. P.D.T.",
        "criminal_or_tax": "criminal",
        "top_tfidf": "p.d.t, p.d.t., 34780, sexual, 2012",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12681/index.do"
    },
    {
        "case_code": "tax[1984] 1 SCR 536",
        "case_name": "Stubart Investments Ltd. v. The Queen",
        "criminal_or_tax": "tax",
        "top_tfidf": "grover, transaction, business, sham, page",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2488/index.do"
    },
    {
        "case_code": "criminal2012SCC58",
        "case_name": "R. v. Dineley",
        "criminal_or_tax": "criminal",
        "top_tfidf": "procedural, presumptions, carter, breathalyzer, amendments",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12656/index.do"
    },
    {
        "case_code": "tax[1983] 2 SCR 493",
        "case_name": "Morguard Properties Ltd. v. City of Winnipeg",
        "criminal_or_tax": "tax",
        "top_tfidf": "winnipeg, city, assessment, 1980, land",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2485/index.do"
    },
    {
        "case_code": "criminal2012SCC56",
        "case_name": "R. v. Boudreault",
        "criminal_or_tax": "criminal",
        "top_tfidf": "vehicle, boudreault, care, toews, danger",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12636/index.do"
    },
    {
        "case_code": "tax[1983] 2 SCR 428",
        "case_name": "The Queen v. Savage",
        "criminal_or_tax": "tax",
        "top_tfidf": "prize, savage, employment, achievement, income",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2483/index.do"
    },
    {
        "case_code": "criminal2012SCC54",
        "case_name": "R. v. Picot",
        "criminal_or_tax": "criminal",
        "top_tfidf": "picot, brunswick, 34499, charles, indecent",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12616/index.do"
    },
    {
        "case_code": "tax[1983] 1 SCR 57",
        "case_name": "Regional Assessment Commisioner v. Caisse Populaire de Hearst",
        "criminal_or_tax": "tax",
        "top_tfidf": "preponderant, profit, loans, business, leaf",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/4575/index.do"
    },
    {
        "case_code": "criminal2012SCC50",
        "case_name": "R. v. Rochon",
        "criminal_or_tax": "criminal",
        "top_tfidf": "rochon, 34557, campeau, bergevin, nicole",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/12614/index.do"
    },
    {
        "case_code": "tax[1983] 1 SCR 29",
        "case_name": "Nowegijick v. The Queen",
        "criminal_or_tax": "tax",
        "top_tfidf": "indian, reserve, property, income, wages",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/2462/index.do"
    },
    {
        "case_code": "criminal2012SCC49",
        "case_name": "R. v. Prokofiew",
        "criminal_or_tax": "criminal",
        "top_tfidf": "prokofiew, solty, jury, silence, guilt",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/10011/index.do"
    },
    {
        "case_code": "tax[1982] 2 SCR 504",
        "case_name": "R. v. Melford Developments Inc.",
        "criminal_or_tax": "tax",
        "top_tfidf": "1956, guaranty, article, convention, income",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/5509/index.do"
    },
    {
        "case_code": "criminal2012SCC48",
        "case_name": "R. v. D.C.",
        "criminal_or_tax": "criminal",
        "top_tfidf": "d.c., condom, klein, complainant, aids",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/10010/index.do"
    },
    {
        "case_code": "tax[1982] 1 SCR 605",
        "case_name": "Equipements Rocbec Inc. et al. v. Minister of National Revenue",
        "criminal_or_tax": "tax",
        "top_tfidf": "approval, pateras, appellants, equipements, rocbec",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/5471/index.do"
    },
    {
        "case_code": "criminal2012SCC47",
        "case_name": "R. v. Mabior",
        "criminal_or_tax": "criminal",
        "top_tfidf": "fraud, sexual, transmission, cuerrier, vitiating",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/10008/index.do"
    },
    {
        "case_code": "tax[1982] 1 SCR 609",
        "case_name": "Fee et al. v. Bradshaw et al.",
        "criminal_or_tax": "tax",
        "top_tfidf": "certificate, appellants, injunction, sessions, discretionary",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/5474/index.do"
    },
    {
        "case_code": "criminal2012SCC44",
        "case_name": "R. v. Bellusci",
        "criminal_or_tax": "criminal",
        "top_tfidf": "bellusci, stay, asselin, prison, handcuffed",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/10005/index.do"
    },
    {
        "case_code": "tax[1982] 1 SCR 589",
        "case_name": "Goodman v. Rompkey et al.",
        "criminal_or_tax": "tax",
        "top_tfidf": "approval, authorization, superior, c.c.p, search",
        "url": "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/5470/index.do"
    }
];