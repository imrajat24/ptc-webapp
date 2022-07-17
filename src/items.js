import { nanoid } from "nanoid";

const hardwareItems = () => {
  return [
    // !pdfs and the other inpage content will also be included in this  (another array can be made in the items array!)

    {
      id: 1,
      name: "fasteners",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656172823/PTC/hardware/fasteners-img_1_c9xl5o.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658058077/PTC/hardware/fasteners-2_mwquau.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658057914/PTC/hardware/fasteners-3_1_l044lp.webp",
      ],
      seller: "Caparo India Pvt Ltd",
      pdf: "https://drive.google.com/file/d/1EHQfy6eIQd_bCFkwqMcYB4eETyGdrO4H/view?usp=sharing",
      desp: "Established in 2005 at Chopanki (Bhiwadi), Rajasthan, Caparo's fasteners division is among the market leaders in fasteners technology in India. As a specialist in in-house manufacturing of a wide range of high-tensile standard and special fasteners, the division has established itself as a reliable supplier of fasteners to almost all the Automobile OEMs in the country and their manufacturing locations abroad. Known for our solutions-driven know-how and zero-defects policy, we produce fasteners for a variety of international and Indian standards from cold heading quality of Medium Carbon, High Carbon & Alloy Steel. As a process-driven and IATF 16949, ISO 45001 & ISO 14001 certified facility , our primary focus is to provide the best solutions to our customers, with new product development being our hallmark. As a result, we have developed a wide range of products catering to the needs of the automobile as well as general engineering applications.",
      link: "https://www.caparo.co.in/fasteners/",
      category: "hardware",
    },
    {
      id: 2,
      name: "locks",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180107/PTC/hardware/locks_v5rkxt.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658058140/PTC/hardware/locks-2_1_mro8yv.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658058145/PTC/hardware/locks-3_1_e54bxm.webp",
      ],
      seller: "Harrison Locks",
      pdf: "https://drive.google.com/drive/folders/12xveCukjMKrzYvbyR7OAI_MTTo10rCT1?usp=sharing",
      desp: "Over 6 decades, Harrison which has been brand leader in locks & hardware solution. Be fealess & desire for more from HARRISON with a bold thinking and rigorous craftsmanship combine to bring innovative, sturdy products. Harrison a brand, is one of the leading company known for providing best security & hardwaresolutions. We're celebrating 65+ years of setting the standards of excellences and pushing the limits of product design. whether we are bringing to you. If there's anyone we owe our success over 6 decades milestone to,it's you. Millions of customers in every home, accross the country who have shown their trust on every HARRISON product, that we have introduced. Here's looking forward to an even longer journey ahead with you!!",
      link: "https://www.harrisonlocks.com/products/1/1/2",
      category: "hardware",
    },
    {
      id: 3,
      name: "paints",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180300/PTC/hardware/paint_bppczw.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658059473/PTC/hardware/asian_paints-2_zwejsm.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658059503/PTC/hardware/Asian-Paints-3_ac7gwx.webp",
      ],
      seller: "Asian Paints",
      pdf: "https://drive.google.com/file/d/1Z-y7C662i2rTZCoDdiW4rzEik1IZFg_S/view?usp=sharing",
      desp: "The company has come a long way since its small beginnings in 1942. It was set up as a partnership firm by four friends who were willing to take on the world's biggest, most famous paint companies operating in India at that time. Over the course of 25 years, Asian Paints became a corporate force and India's leading paints company. Driven by its strong consumer-focus and innovative spirit, the company has been the market leader in paints since 1967. Today, it is double the size of any other paint company in India. Asian Paints manufactures a wide range of paints for decorative and industrial use and also offers Wall Coverings, adhesives and services under its portfolio. The company is also present in the Home Improvement and Decor segment and offers bath and kitchen products.  The company also introduced lightings, furnishings and furniture in its portfolio.  In the Health and Hygiene segment, Asian Paints offers range of Sanitizers and Surface Disinfectants.",
      link: "https://www.asianpaints.com/",
      category: "hardware",
    },
    {
      id: 4,
      name: "sanitary",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180502/PTC/hardware/sanitary_fzrlvy.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658059921/PTC/hardware/product-500x500_ixu9sc.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658059952/PTC/hardware/ajay-upvc-pipe-fittings-3_growyc.webp",
      ],
      seller: "Prince",
      pdf: "https://drive.google.com/file/d/1WwnnTLzTxc_Y0lg7RO_68ynURjaza2Ne/view?usp=sharing",
      desp: "One of the largest SKUs in the industry of over 7200 products. Prince is committed towards constant innovations in plumbing, irrigation and sewerage technologies to meet the nation’s constantly increasing water demands. Prince Pipes and Fittings Ltd. constantly strives to pave the way for a future that provides clean water for everyone and everywhere; from the smallest villages to the largest cities. Prince Pipes and Fittings Ltd. incorporates a well-structured framework, combined with state-of-the-art machinery that creates a zero defect manufacturing process and leak-proof piping systems. We operate computerized injection moulding machines with a clamping force ranging from 50 to 660 tons to manufacture fittings.",
      link: "https://www.princepipes.com/",
      category: "hardware",
    },
    {
      id: 5,
      name: "v-Belts",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180688/PTC/hardware/v-belts_pwmdqu.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658060182/PTC/hardware/download_alln0i.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658060185/PTC/hardware/download_1_raafpd.webp",
      ],
      seller: "JK Fenner",
      pdf: "https://drive.google.com/file/d/1GEJXU-GfuysZ1HfSw-hm33CrsbOoUwrL/view?usp=sharing",
      desp: "In 1987 JK Fenner became a strategic investor in Fenner Cockill Limited and eventually acquired company in the year 2004. Right from the time of its Inception the name has been synonymous with Mechanical Power Transmission and Sealing Solutions. The company was acquired by JK Organisation in 1987, and currently, as a member of the conglomerate J.KFenner operates 5 state-of-the-art manufacturing units and 3 world-class Research & Development facilities. With quality, commitment and relentless service Fenner has established itself as the market leader for Power Transmission Belts in India catering to diverse industrial applications. J.K Fenner is also a name to reckon with in the design and manufacturing of Oil Seals, Hoses, Gear Boxes, Geared Motors, Pulleys, Power Transmission Belts, FEAD Systems, Belt Tensioners, and Moulded Rubber Products, EV Products for Automotive & Industrial Applications. The Organisation addresses the needs of major sectors like Steel, Cement, Coal, Sugar, Power, Paper, Textiles, Food processing, Agriculture and many more.",
      link: "https://jkfenner.com/industrial-power-transmission-belts/",
      category: "hardware",
    },
    {
      id: 6,
      name: "air-fittings",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180758/PTC/hardware/air_fittings_nsnlau.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658060630/PTC/hardware/download_2_opuawa.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658060634/PTC/hardware/download_3_qisxr4.webp",
      ],
      seller: "Techno",
      pdf: "https://drive.google.com/file/d/1QLYyIc5abo1XjKYVs4rw2j2mctuhW51f/view?usp=sharing",
      desp: "We would like to introduce ourselves as a dealer of Pneumatics Products for last 25 years and have luanched imported Pneumatics Products since last three years. We have a full stock of Directional Control Valves, Diaphragm Valves, Pilot and Direct Acting Solenoid Valves, Manual, Mechanical and Automatic Valves, Auto Drain Valve, High Pressure Filter & Regulator, Air Treatment Units, Push-inTube Fittings, Silencers, Air guns, Brass One Touch Couplers, Hose Reel, Spring Balancers etc. to meet and satisfy every customer needs. All the products, we import are manufactured by the Companies who possess ISO 9001-2000 International Quality System Attestation. Techno Pneumatics is in coordination with these companies, who use their technological strength and rich professional experiences and launch latest products.",
      link: "http://www.techno-pneumatics.com/default.aspx",
      category: "hardware",
    },
    {
      id: 7,
      name: "power tools",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180828/PTC/hardware/power_tools_1_qdmmzf.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658060995/PTC/hardware/61pV_NwjPdL._AC_SX466__bbe5kw.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658060996/PTC/hardware/images_k16qhu.webp",
      ],
      seller: "JCB",
      pdf: "https://drive.google.com/file/d/18P1HQUgJpDLOwfrQTZwca3RZaP_zx8Yn/view?usp=sharing",
      desp: "JCB India Limited is a leading manufacturer of earthmoving and construction equipment in India. The company started as a joint venture in 1979 and is now a fully owned subsidiary of J.C Bamford Excavators, United Kingdom. With five state-of-the-art factories in India, JCB manufactures a wide range of world-class equipment in India for the domestic market as well as for exports to more than 110 countries. JCB introduced the iconic Backhoe Loader in India over four decades ago. It has since expanded its range to over 60 products in nine categories. The Ballabgarh factory near New Delhi, which is the world’s largest factory for Backhoe Loaders, is also the Headquarters for JCB India. This facility, apart from Backhoe Loaders, also manufactures Skid Steer Loaders, Telehandlers, Diesel Generators and Diesel Engines. ",
      link: "https://www.jcb.com/en-in",
      category: "hardware",
    },
    {
      id: 8,
      name: "lifting items",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180902/PTC/hardware/Lifting_items_fxctrd.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658061146/PTC/hardware/fire-and-safety-products-500x500_jsvdvl.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658061152/PTC/hardware/product-jpeg-500x500_ze0gy9.webp",
      ],
      seller: "Ferreterro",
      pdf: "https://drive.google.com/file/d/1J1dmHqWd_NiYxxi4m6ZXww2AATjbXM7x/view?usp=sharing",
      desp: "Our roots are more than 135 years deep, with being Delhi’s first Foundry and then being Worlds largest manufacturer of spanners and hand tools with 7000 workforce. We started manufacturing hardware fittings with a British collaboration which we took over and expanded into manufacturing and exporting of Lifting, Lashing, Hoists, Tie down restraint, Safety and defence products. We have a diverse manufacturing portfolio. Manufacturing right from Webbing Slings to round slings, Own High Tenacity Polyester Yarn, Steel Chains, Snow Chains, Non Skid Chains, Chain Pulley blocks, Electric chain hoists, Gears, Compensation chains for elevator industry, Tyre chains, Aircraft arrester Nets, Cargo Bars, Purchase tapes, Shoulder dolly, Cam buckles, Ratchet lashing buckles and hooks, One way buckles, Drop forged buckles, Shackles, Air dunnage bags, composite straps, Fall Arrest safety harness belts and all hardware for same, Wire buckles and many more.",
      link: "https://ferreterro.com/about-us/",
      category: "hardware",
    },
    {
      id: 9,
      name: "welding items",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180996/PTC/hardware/welding_n2hno0.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658061752/PTC/hardware/download_4_ddklzc.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658061751/PTC/hardware/0f446d_2f56ce412b434427a3d312ead56743f5_mv2_r6drhu.webp",
      ],
      seller: "Borris",
      pdf: "https://drive.google.com/file/d/1ilIS1PkVr_5O77nECTD2UzJfZgpjPid7/view?usp=sharing",
      category: "hardware",
    },
    {
      id: 10,
      name: "weld mesh net",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181146/PTC/hardware/net_i2b5yp.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658062599/PTC/hardware/download_5_tz49em.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658062600/PTC/hardware/download_6_yv4aoy.webp",
      ],
      seller: "Tiger Wire Mesh Nets",
      desp: "Tiger Brand is the most popular, renowned and trusted wire mesh brand of India for its unmatched quality and consistency. The brand enjoys unmatched reputation and is the undisputed leader in the industry. The trade mark brand name was adopted in 1964-65, and the manufacturing was established in 1958, by Late Sh. Prithvi Raj Ji, under the name of Calcutta Wire Netting Industries. It has since then followed the same foot steps and enlarged the scope of manufacturing varieties and presently can boast of having the maximum number of looms in India and a manifold types and other metal wire products.",
      link: "https://tigerwiremesh.com/",
      category: "hardware",
    },
    {
      id: 11,
      name: "tarpaulin",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181225/PTC/hardware/Tarpaulin_uoabyx.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658062872/PTC/hardware/download_7_xy8qyr.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658062861/PTC/hardware/download_8_mimgbg.webp",
      ],
      seller: "Supreme",
      desp: "Founded in 1942, Supreme is an acknowledged leader of India's plastics industry. Handling volumes of over 3,50,000 tonnes of polymers annually effectively makes the country's largest plastics processors. Not surprisingly, we also offer the widest and most comprehensive range of plastic products in India. Our 25 advanced plants are powered by technology from world leaders, and complement our extensive facilities for R & D and new product development. In fact, Supreme is credited with pioneering several products in India. These include Cross- Laminated Films, HMHD Films, Multilayer Films, SWR Piping Systems and more. Supreme Industries Limited is India's leading plastic processing company with seven business divisions. The company has forayed into different types of plastic processing in Injection Moulding, Rotational Moulding (ROTO), Extrusion, Compression Moulding, Blow Moulding etc.",
      link: "https://www.supreme.co.in/index.php",
      category: "hardware",
    },
    {
      id: 12,
      name: "packaging items",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181316/PTC/hardware/packge_yy3f3z.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658063114/PTC/hardware/bopp-transparent-tape-500x500_ijpgef.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658063116/PTC/hardware/double-sided-polyester-tape-500x500_adgipx.webp",
      ],
      seller: "Twin Tech",
      pdf: "https://drive.google.com/file/d/1Ry6-ljPHWeRBqAPB_n2KiBpUIX6DS4cd/view?usp=sharing",
      desp: "win Tech India Pvt. Ltd is a leading name in manufacturing and supplying of aerosols and sprays in a multitude of industrial application. Biodegradable, user & environment friendly, all our sprays are custom designed for easy use. We promote our aerosols for different applications under the registered brand name of SPRAYZET. We also do contract aerosol packaging for a variety of companies and industries, with extensive private label aerosol filling / packaging capabilities. “Twin Tech” is the manufacturer, exporter & supplier of specialty industrial maintenance aerosols like On-Line Contact Cleaner, Carbon Remover, Electronic Cleaner, Insulating Spray Varnish, Bus-Bar Coatings, Penetrating Oil, Moisture Displacer, Rust Preservatives, Rust-Remover, Anti-Seize Compound, Silicon-Free Mould Release Agent, Mould & Die Protector, Mould Cleaner, Galvanizing Coating, etc.",
      link: "https://www.twinindia.com/",
      category: "hardware",
    },
    {
      id: 13,
      name: "waterproofing items",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181404/PTC/hardware/Sheet-waterproofing-membrane_antpia.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658063356/PTC/hardware/fosroc-waterproofing-chemicals-250x250_tnotdv.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658063346/PTC/hardware/fosroc-waterproofing-chemicals-500x500-500x500_pl03mq.webp",
      ],
      seller: "Fosroc",
      pdf: "https://drive.google.com/file/d/1zIWcslvV3pxN8LlX6g41dsqhV4rJXxJ0/view?usp=sharing",
      desp: "Fosroc is a world leader in manufacturing and supplying high performance chemicals for the construction industry. We deliver complete constructive solutions for all project needs. Fosroc India is a 100% privately owned subsidiary of Fosroc International Limited UK, a division of JMH Group, with over 80 years of experience worldwide. Fosroc India has over four decades of pioneering experience in providing Constructive Solutions and serving customers in the construction industry across the country. We have state-of-the-art manufacturing facilities in Bangalore (Karnataka), Ankleshwar (Gujarat), Kolkata (West Bengal) and Keshwana (Rajasthan), with a wide network of sales and marketing offices in all metropolitan areas and leading cities in India, supported by mix design and specification experts, regional technical service specialists and regional concrete laboratories. Fosroc’s corporate and registered offices are based in Bangalore.",
      link: "https://fosroc.com/english/about-fosroc-india",
      category: "hardware",
    },
    {
      id: 14,
      name: "ms & gi pipes",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180582/PTC/hardware/MS_GI_pipes_wzwvu2.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658063642/PTC/hardware/download_10_pj350v.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658063643/PTC/hardware/download_9_jayxos.webp",
      ],
      seller: "Jindal",
      pdf: "https://drive.google.com/file/d/1mBjvMiL8H3MUOKu-qgrdnlxzJ5Hz_n0_/view?usp=sharing",
      desp: "Jindal Star a brand of a D.P. Jindal Group has three manufacturing units located in Ghaziabad (Uttar Pradesh), Nagothane (Maharashtra) and Bellary (Karnataka), with a production capacity of 5,00, 000 MT ERW Pipes and Tubes with a thickness from 2.00 mm to 12.7 mm having an outer Diameter ranging from 1/2” to 20” NB as per specifications of IS, BS, API, ASTM, DIN, IBR which conforms to the various international standards. These products are widely used across various industries like agriculture, oil, refinery, public health, housing, irrigation, engineering, fire fighting, tubular poles and structural etc. The company’s Black & Galvanized ERW Steel Tubes Conforming to IS: 1239, IS:3589 ,IS:1161, API 5L (Line Pipe) are few of the largest selling models catering to Plumbing, MEP works, Structural and Oil and Gas applications.",
      link: "https://www.jindal.com/",
      category: "hardware",
    },
    {
      id: 15,
      name: "insulation items",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181498/PTC/hardware/Insulation_ms0wzl.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658063913/PTC/hardware/download_12_tuccwy.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658063922/PTC/hardware/download_11_ltyfam.webp",
      ],
      seller: "Shreeram Equitech Pvt Ltd",
      desp: "We live in the present age of ever increasing cost of fuels, which in turn leads to increased cost of production and end productions. In this context of rapid growth of energy intensive industries in our country and overseas, updating thermal insulation standards, development of superior materials and evolution of speedier manufacturing techniques are the need of the hour. We, at Shree Ram Equitech Pvt. Ltd., have taken up the challenge of producing complete range of insulation products, as per Indian and International Standards. The company has set up a 14400 MTPA capacity plant at Rasmada Industrial Area, Durg, Chhattisgarh with ultra modern facilities and sophisticated infra structures. The company is spread all over India with Head Office at Durg and Regional Sales Offices at Delhi, Kolkatta, Pune, Hyderabad and Chennai.",
      link: "https://www.indiamart.com/shreeram-equitech-pvt-ltd/aboutus.html",
      category: "hardware",
    },
    {
      id: 16,
      name: "measuring items",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181576/PTC/hardware/Measuring-Items-1_pp0brc.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658064378/PTC/hardware/download_13_dzllun.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658064379/PTC/hardware/download_14_wqe5yx.webp",
      ],
      seller: "Freemans",
      pdf: "https://drive.google.com/file/d/11jRrLuyLdFcrx62RGq2_cVecsMdGnoAS/view?usp=sharing",
      desp: "Founded in 1950, FMI Limited is the largest manufacturer of measuring tapes, spirit levels and measuring wheels in the Indian sub-continent. We are a highly vertically integrated measuring tape manufacturing company, with state of the art in-house injection moulding and steel cold rolling facilities. In 2018, we achieved our long term ambition of manufacturing more than 100,000 high quality measuring tapes per day. The FREEMANS product portfolio now extends beyond linear measurement tools to encompass a wide range of hand tools, precision measuring tools, digital measuring tools and power tool accessories.",
      link: "https://www.freemansgroup.com/",
      category: "hardware",
    },
    {
      id: 17,
      name: "bearings",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181734/PTC/hardware/Bearings_m9gmmx.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658064515/PTC/hardware/download_16_byudf9.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658064516/PTC/hardware/download_15_nsrb9c.webp",
      ],
      seller: "NBC Bearings",
      pdf: "https://drive.google.com/file/d/1EXe7w04DjGN9YF3jj-uXx8v4EoSRytnM/view?usp=sharing",
      desp: "A symbol of dependability and flexible engineering solutions, NBC Bearings is the brand of National Engineering Industries. Founded in 1946, National Engineering Industries Ltd (NEI) is India’s leading bearings manufacturer and exporter, renowned for excellence in quality and delivery. Headquartered in Jaipur, NEI is an integral part of the US$ 2.4 bn CK Birla Group. Having started with 30,000 bearings in 19 sizes in 1946, NEI has evolved to manufacture over 200 million bearings each year offered in more then 2300 variants to serve a host of customers in India and 30 other countries across five continents in automotive, railways and industrial segments. NEI also serves the Indian aftermarket through a countrywide network of 550 authorized stockists.",
      link: "https://nbcbearings.com/",
      category: "hardware",
    },
    {
      id: 18,
      name: "tools & accessories ",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181818/PTC/hardware/Tools-nd-accessories_ujrsuw.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658064727/PTC/hardware/taparia-hand-tools-500x500-500x500_jm6yoi.webp",
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1658064728/PTC/hardware/download_17_hho3wp.webp",
      ],
      seller: "Taparia",
      pdf: "https://drive.google.com/file/d/1dt3EXrLKZNtbp4-9uioK8SxjpgptXhjW/view?usp=sharing",
      desp: "The company has a well laid out fully equipped factory located at Nashik, which is about four hours drive from the city of Mumbai in Western India and another expanded unit at Goa, approx 600 kilometers from Mumbai. The plant is located on a total area of 42832 Sq.Mtrs. All the manufacturing facilities required for production of hand tools are under one roof – one location. Hand tools manufacturing is complicated involving high technology and labor intensive production process. Out of the total of 1200 work force of this, the number of people engaged in direct production is 1000. The remaining are in administrative and management. The company’s research and development department is manned by Mechanical Engineers and Metallurgists equipped with latest CAD design facilities etc.From its inception, the company has laid high emphasis on the quality of its products. It has well established quality control department to monitor the quality of the product at different stages of production. In fact Taparia tools meet and some cases exceed the U.S. Federal Specifications of hardness and torque value besides meeting Indian, British and German standards. Taparia tools are guaranteed against manufacturing and raw material defects and are replaced free with no question asked.",
      link: "https://www.tapariatools.com/",
      category: "hardware",
    },
  ];
};

const steelItems = () => {
  return [
    // !pdfs and the other inpage content will also be included in this  (another array can be made in the items array!)
    {
      id: 51,
      name: "shape and sections",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181970/PTC/steel/Shapes_and_sections_zjrex8.webp",
      ],
      category: "steel",
    },
    {
      id: 52,
      name: "round & square pipes",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656182107/PTC/steel/Round_and_square_pipes_rn1vmq.webp",
      ],
      category: "steel",
    },
    {
      id: 53,
      name: "ms bar",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656182146/PTC/steel/Ms_bars_myrlpw.webp",
      ],
      category: "steel",
    },
    {
      id: 54,
      name: "coil & plate (MS & GI)",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656182218/PTC/steel/Coil_and_plate_bhkmfm.webp",
      ],
      category: "steel",
    },
    {
      id: 55,
      name: "flat (MS & SS)",
      img: [
        "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656182263/PTC/steel/AnyConv.com__Flats_MS_GI_ddrf8o.webp",
      ],
      category: "steel",
    },
  ];
};

export { hardwareItems, steelItems };
