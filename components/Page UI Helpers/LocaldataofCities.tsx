export type CityInfo = {
  description: string;
  pollutionInsight: string;
  image?: string;
};

export const cityData: Record<string, CityInfo> = {
  //---------------------Australia-----------------------------------------
  //new-south-wales
  "sydney": {
    description:
      "Sydney is famous for its iconic harbour, Opera House, and vibrant coastal lifestyle, attracting millions of visitors each year. It experiences mild winters and warm summers with occasional heatwaves. Coastal winds help moderate temperatures and influence humidity levels.",
    pollutionInsight:
      "Air pollution in Sydney mainly arises from vehicle emissions, industrial activity, and seasonal bushfire smoke that occasionally drifts into the city. The sea breeze from the Pacific Ocean often disperses pollutants quickly, though high-traffic areas and inner suburbs may experience elevated AQI during peak hours.",
  },

  "queanbeyan": {
    description:
      "Queanbeyan is located near the border of the Australian Capital Territory and offers a unique mix of regional charm and urban access to Canberra. The town features wide open green spaces, parks, and a growing suburban community. Winters are cool and crisp while summers are warm with plenty of sunshine. Local cultural events and markets add to the town's friendly atmosphere. Residents enjoy a peaceful lifestyle with easy access to educational and recreational facilities.",
    pollutionInsight:
      "Air quality is generally good throughout the year, though local traffic and residential heating in winter can cause temporary fluctuations. Cross-border emissions from Canberra sometimes influence AQI levels. Open terrain and consistent winds help disperse pollutants effectively keeping the air breathable.",
  },

  "kialla": {
    description:
      "Kialla is a quiet locality within the Greater Shepparton region, surrounded by vast farmlands and open countryside. The area experiences hot summers and cool winters with clear skies for most of the year. The community is small and agricultural in nature, offering a calm rural lifestyle. Residents benefit from fresh air and a strong connection to the surrounding natural landscape. Local recreational activities include walking trails and small community events.",
    pollutionInsight:
      "Air remains mostly clean due to low population and minimal industrial activity. Agricultural dust, machinery use, and occasional smoke from regional fires may temporarily influence air quality. The area generally maintains a healthy atmosphere year-round.",
  },

  "wollongong": {
    description:
      "Wollongong is a vibrant coastal city located south of Sydney, known for its beaches, escarpment views, and a busy industrial port. The climate is mild with ocean breezes moderating temperatures throughout the year. The city blends natural beauty with urban living, offering cultural attractions and outdoor activities. Residential areas are interspersed with green spaces, and coastal walks provide stunning views. Wollongong’s lifestyle combines work opportunities with seaside recreation.",
    pollutionInsight:
      "Air pollution can arise from port activities, industrial operations, and dense traffic in urban areas. Fortunately, regular sea breezes and coastal winds help disperse pollutants keeping air quality moderate to good most of the time. Seasonal bushfire smoke may occasionally affect visibility.",
  },

  "tweed-heads": {
    description:
      "Tweed Heads sits on the far north coast of New South Wales, right on the Queensland border. The town enjoys a subtropical coastal environment with lush hinterlands, rivers, and beaches. Summers are warm and humid while winters are mild and pleasant. Tourism, fishing, and small business contribute to the local economy. Outdoor recreation is popular with walking trails, waterways, and coastal activities attracting residents and visitors alike.",
    pollutionInsight:
      "Air quality is generally good, with occasional impacts from traffic and seasonal bushfire smoke. Ocean breezes and frequent rainfall help maintain fresh air throughout the year. Local vegetation also contributes to cleaner atmospheric conditions.",
  },

  "port-macquarie": {
    description:
      "Port Macquarie is a scenic coastal town famous for its beaches, national parks, and relaxed lifestyle. The climate is humid subtropical with warm summers and mild winters. Residents enjoy outdoor activities like surfing, bushwalking, and river recreation. The town is surrounded by forests and natural reserves which enhance the scenic charm. Port Macquarie combines a tranquil lifestyle with access to modern services and community events.",
    pollutionInsight:
      "Local vehicle emissions, wood heating, and occasional bushfire smoke can temporarily affect air quality. Coastal winds and the town’s proximity to the ocean help disperse pollutants and maintain clean air for most of the year.",
  },

  "bathurst": {
    description:
      "Bathurst is one of Australia’s oldest inland cities, celebrated for its historic architecture and motor racing heritage. It experiences cool winters and warm summers with clear skies for most of the year. The city offers a combination of cultural attractions, educational facilities, and open countryside. Residents enjoy community events, parks, and recreational spaces. Bathurst’s lifestyle blends heritage charm with modern amenities and scenic landscapes.",
    pollutionInsight:
      "Temporary air quality fluctuations can occur during events, traffic peaks, or dry weather periods. Open terrain and prevailing winds help disperse pollutants efficiently ensuring that air quality remains moderate to good for most of the year.",
  },

  "coffs-harbour": {
    description:
      "Coffs Harbour is a coastal city on the Mid North Coast, surrounded by beaches, forests, and banana plantations. The humid subtropical climate brings warm summers and mild winters. The city is popular for tourism and offers a mix of outdoor activities including coastal walks, fishing, and national park exploration. Local markets and community events add to its vibrant character. The combination of natural beauty and urban facilities creates a unique lifestyle for residents.",
    pollutionInsight:
      "Air quality is generally good but may be affected temporarily by traffic, agricultural burning, or seasonal bushfire smoke. Sea breezes and regular rainfall help maintain fresh and healthy air throughout the city.",
  },

  "goulburn": {
    description:
      "Goulburn is a historic inland city known for its colonial architecture and rural surroundings. It experiences cold winters and mild summers with generally clear skies. Grazing lands and open farmland dominate the landscape creating a peaceful environment. Residents enjoy community gatherings, local markets, and recreational areas. The town offers a strong connection to history and nature while providing access to modern facilities.",
    pollutionInsight:
      "Air quality can see minor fluctuations in winter due to wood heating and local traffic. Winds across the Southern Tablelands efficiently disperse pollutants keeping the atmosphere mostly clean.",
  },

  "armidale": {
    description:
      "Armidale is located on the Northern Tablelands and is known for its universities and cool highland climate. The city experiences four distinct seasons including frosty winters and mild summers. Gardens, parks, and cultural institutions make it a center for education and community activities. Residents enjoy a mix of academic life and outdoor recreation in a highland environment. Armidale’s scenic beauty attracts visitors year-round.",
    pollutionInsight:
      "Residential wood smoke is the main air quality concern during winter months. Elevated terrain and regular winds help maintain fresh and clean air throughout the year.",
  },

  "taree": {
    description:
      "Taree is a regional town on the Manning River surrounded by fertile farmlands and forests. Summers are warm and humid while winters are mild. The town supports agriculture, recreation, and local community life. Riverside parks and walking trails are popular among residents. Taree offers a quiet yet connected lifestyle with access to essential services and natural beauty.",
    pollutionInsight:
      "Air quality can be temporarily affected by agricultural activities, vehicle traffic, or seasonal bushfire smoke. River winds and open surroundings generally help maintain healthy conditions.",
  },

  "cessnock": {
    description:
      "Cessnock lies in the heart of the Hunter Valley wine region with rolling hills and extensive vineyards. Summers are warm and winters are cool creating ideal conditions for wine production. The town is surrounded by scenic landscapes and supports tourism, agriculture, and local services. Residents enjoy a relaxed lifestyle with outdoor activities, markets, and festivals. Cessnock combines rural charm with modern conveniences.",
    pollutionInsight:
      "Dust from vineyards, traffic, and controlled burns may temporarily reduce air quality. Natural airflow in the valleys helps disperse pollutants and maintain clean air most of the time.",
  },

  "kiama": {
    description:
      "Kiama is a coastal town famous for its blowhole, beaches, and relaxed seaside atmosphere. It enjoys a mild oceanic climate with moderate rainfall and gentle temperatures year-round. Tourism and outdoor activities are central to local life. Residents appreciate the scenic views, walking trails, and coastal charm. The town provides a peaceful and healthful environment for living and visiting.",
    pollutionInsight:
      "Air quality remains excellent most of the year. Minor influences may come from traffic or nearby bushfire smoke, but sea breezes ensure fresh air and good visibility.",
  },

  "goonellabah": {
    description:
      "Goonellabah is a suburb of Lismore located in the Northern Rivers region, known for its lush greenery and subtropical climate. Summers are warm and wet, while winters are mild and dry. The area combines rural charm with suburban amenities and community activities. Residents enjoy gardens, parks, and proximity to rivers and forests. The town provides a serene and natural setting for living.",
    pollutionInsight:
      "Air quality may be temporarily affected by agriculture, local traffic, or seasonal fires. Frequent rainfall and abundant vegetation help restore clean air quickly.",
  },

  "batemans-bay": {
    description:
      "Batemans Bay is a coastal town along the South Coast, surrounded by forests, beaches, and rivers. The climate is mild and oceanic, supporting outdoor recreation and tourism. Summers are warm and sunny, winters are cool and comfortable. Residents enjoy fishing, boating, and walking trails. The town combines natural beauty with community life.",
    pollutionInsight:
      "Occasional bushfire smoke or traffic can affect air quality temporarily. Coastal winds and forested surroundings help maintain fresh and healthy air throughout the year.",
  },

  "mudgee": {
    description:
      "Mudgee is an inland town celebrated for its vineyards, rolling hills, and rural charm. The climate is temperate with warm summers and cool winters. The town offers a quiet lifestyle alongside wine tourism and local markets. Residents enjoy outdoor activities and scenic landscapes. Mudgee combines agricultural productivity with natural beauty.",
    pollutionInsight:
      "Wood burning in winter and dust from farmland may temporarily reduce air quality. Overall, the area maintains clean and breathable air for most of the year.",
  },

  "muswellbrook": {
    description:
      "Muswellbrook lies in the Upper Hunter Valley and is known for its coal mining, power generation, and agricultural surroundings. Summers are warm and winters are mild with occasional rainfall. The town balances industrial activity with rural landscapes and community life. Outdoor recreation and local events are part of the lifestyle. Muswellbrook offers access to essential services in a regional setting.",
    pollutionInsight:
      "Air quality is mainly affected by mining and industrial emissions. Prevailing winds and open terrain help disperse pollutants ensuring that temporary fluctuations do not persist.",
  },

  "bowral": {
    description:
      "Bowral is a town in the Southern Highlands known for its cool climate, gardens, and picturesque surroundings. Winters are chilly while summers are mild. The town is popular for cultural events, outdoor activities, and community gatherings. Residents enjoy scenic walking trails, parks, and historic buildings. Bowral combines natural beauty with a welcoming community atmosphere.",
    pollutionInsight:
      "Wood smoke from homes and traffic may slightly influence air quality in winter. Clean surroundings and regular winds maintain healthy air for the majority of the year.",
  },

  "byron-bay": {
    description:
      "Byron Bay is a coastal town renowned for its beaches, surf culture, and laid-back lifestyle. The subtropical climate brings warm humid summers and mild winters. Tourism, wellness retreats, and outdoor recreation define local life. Residents enjoy cultural events, markets, and natural scenery. The town is a hub for both visitors and a community seeking a relaxed lifestyle.",
    pollutionInsight:
      "Air quality is typically excellent. Seasonal bushfire smoke or high tourist activity can temporarily reduce air quality but ocean winds help restore freshness quickly.",
  },

  "cowra": {
    description:
      "Cowra is a regional agricultural town in central-west New South Wales, known for vineyards and open plains. Summers are warm and winters are cool. Residents enjoy a rural lifestyle with community events and outdoor recreation. The town has a peaceful atmosphere supported by surrounding farmland and natural landscapes.",
    pollutionInsight:
      "Dust from farming and minor traffic can cause temporary AQI fluctuations. Overall air quality remains clean and breathable most of the year.",
  },

  "yarrawonga": {
    description:
      "Yarrawonga sits by Lake Mulwala near the Victoria border and is known for outdoor recreation and water activities. Summers are warm and dry while winters are mild. The town has a relaxed atmosphere with scenic lake views and open landscapes. Residents enjoy fishing, boating, and community events.",
    pollutionInsight:
      "Air quality may be influenced by agricultural dust and regional burns during dry periods. Breezy lake conditions help disperse pollutants keeping the air generally clean.",
  },

  "nowra": {
    description:
      "Nowra is a key regional center on the Shoalhaven River near the coast. It enjoys a mild oceanic climate with comfortable temperatures year-round. The town is surrounded by forests, farmlands, and coastal areas supporting a variety of recreational activities. Residents benefit from outdoor lifestyle, community facilities, and natural beauty.",
    pollutionInsight:
      "Traffic, industrial activity, and occasional bushfire smoke may impact air quality temporarily. Coastal winds help disperse pollutants quickly maintaining fresh and clean air.",
  },
  // Victoria
  "melbourne": {
  description:
    "Melbourne is the cultural and sporting capital of Victoria known for its vibrant arts scene, laneways, cafes, and Victorian architecture. Summers are warm and occasionally humid while winters are cool and sometimes rainy. The city offers diverse neighborhoods, parks, and cultural institutions, attracting residents and visitors alike. Outdoor events, music festivals, and sporting events are central to the city lifestyle. Melbourne blends historic charm with modern skyscrapers and waterfront attractions.",
  pollutionInsight:
    "Air quality is mostly good but can be affected by traffic congestion, industrial emissions, and seasonal bushfire smoke. Coastal winds from Port Phillip Bay help disperse pollutants and maintain a breathable urban environment.",
},

"geelong": {
  description:
    "Geelong is a coastal city southwest of Melbourne known for its waterfront, shopping precincts, and industrial history. The climate is temperate with warm summers and mild winters. Residents enjoy beaches, parks, and cultural activities. The city has a mix of urban living and suburban neighborhoods. Proximity to the Great Ocean Road makes it a gateway for tourism and natural exploration.",
  pollutionInsight:
    "Air pollution can arise from traffic, port activity, and occasional industrial emissions. Sea breezes and open coastal areas generally help maintain healthy air quality for residents.",
},

"city-of-melbourne": {
  description:
    "The City of Melbourne forms the central business district and cultural heart of Victoria. It experiences warm summers with occasional heatwaves and cool winters with rainfall. Skyscrapers, cultural institutions, cafes, and parks define its urban landscape. Residents and workers enjoy theaters, galleries, and riverside walks. The city is a hub for business, arts, and social life.",
  pollutionInsight:
    "Vehicle emissions and urban activity can temporarily reduce air quality. Sea breezes and city planning help disperse pollutants keeping air quality generally moderate to good.",
},

"bendigo": {
  description:
    "Bendigo is a regional city known for its gold rush history, Victorian architecture, and thriving arts scene. Summers are warm and sunny while winters are cool and crisp. The city has wide streets, parks, and gardens that enhance its charm. Residents enjoy cultural festivals, markets, and a strong community lifestyle. Bendigo combines historical appeal with modern amenities and educational facilities.",
  pollutionInsight:
    "Air quality remains mostly good with minor impacts from local traffic, residential heating, and dust during dry periods. The surrounding topography helps in dispersing pollutants effectively.",
},

"ballarat": {
  description:
    "Ballarat is a regional city celebrated for its gold mining history and well-preserved Victorian architecture. Summers are warm and winters are cool, often with misty mornings. Parks, gardens, and lakes add to the urban charm. Residents enjoy cultural attractions, festivals, and outdoor recreation. The city provides a blend of heritage, education, and community life.",
  pollutionInsight:
    "Temporary air quality fluctuations can occur due to residential heating and traffic. The city’s open spaces and winds help disperse pollutants and maintain mostly good air quality.",
},

"melton": {
  description:
    "Melton is a growing suburb of Melbourne with a mix of residential areas, parks, and open farmland. Summers are warm and winters are cool. The area is family-oriented with local schools, shopping centers, and recreational facilities. Residents enjoy community events and access to nearby urban amenities. Melton’s expansion combines suburban development with natural landscapes.",
  pollutionInsight:
    "Air quality is generally good but may be influenced by traffic and occasional dust from construction or agricultural activities. Local winds help disperse pollutants efficiently.",
},

"frankston": {
  description:
    "Frankston is a coastal suburb on Port Phillip Bay known for its beaches, shopping precincts, and recreational parks. Summers are warm and winters are mild with moderate rainfall. The area combines urban facilities with natural attractions such as the bay and national parks. Residents enjoy outdoor lifestyles, water activities, and community events.",
  pollutionInsight:
    "Traffic and urban activity can temporarily affect air quality. Coastal breezes help maintain clean air and moderate pollution levels.",
},

"mildura": {
  description:
    "Mildura is a regional city in northwestern Victoria along the Murray River, known for its agriculture, vineyards, and sunny climate. Summers are hot and dry while winters are cool. The city offers riverfront recreation, local markets, and cultural festivals. Residents enjoy outdoor activities such as boating, fishing, and walking trails. Mildura blends a relaxed rural lifestyle with access to urban conveniences.",
  pollutionInsight:
    "Air quality can be impacted by dust from agriculture, irrigation practices, and occasional regional fires. River breezes help reduce pollutant concentration and maintain generally clean air.",
},

"warrnambool": {
  description:
    "Warrnambool is a coastal city along the Great Ocean Road famous for beaches, maritime history, and whale watching. Summers are warm and winters are cool with oceanic influence. Residents enjoy outdoor recreation, local festivals, and natural scenery. The city blends tourism with a close-knit community atmosphere. Proximity to natural reserves enhances the scenic and recreational appeal.",
  pollutionInsight:
    "Air remains mostly clean with occasional minor impacts from traffic or industrial activities. Coastal winds support the dispersion of pollutants and maintain healthy air quality.",
},

"shepparton": {
  description:
    "Shepparton is a regional hub in northern Victoria known for agriculture, food processing, and multicultural community life. Summers are warm and winters are cool with moderate rainfall. The city has parks, rivers, and recreational facilities supporting community engagement. Residents enjoy cultural events, markets, and sports activities. Shepparton balances urban amenities with agricultural surroundings.",
  pollutionInsight:
    "Agricultural dust and vehicle traffic may cause temporary dips in air quality. Otherwise the area maintains clean air due to low industrial emissions and frequent winds.",
},

"dandenong": {
  description:
    "Dandenong is a suburb southeast of Melbourne with diverse communities, shopping areas, and light industry. Summers are warm and winters are cool. Parks, cultural centers, and recreational spaces are part of local life. Residents benefit from transport connections and urban conveniences while enjoying green spaces. The area blends industrial activity with suburban living.",
  pollutionInsight:
    "Air quality can fluctuate due to traffic and industrial activity. Winds and open spaces help disperse pollutants and maintain generally healthy conditions.",
},

"traralgon": {
  description:
    "Traralgon is a city in the Latrobe Valley with access to natural reserves, parks, and regional amenities. Summers are warm and winters are cool. The city supports community life, education, and light industry. Residents enjoy outdoor activities, cultural events, and markets. Traralgon provides a mix of regional living with modern facilities.",
  pollutionInsight:
    "Industrial and traffic emissions can occasionally affect air quality. Surrounding forests and wind patterns help disperse pollutants maintaining mostly clean air.",
},

"bacchus-marsh": {
  description:
    "Bacchus Marsh is a regional town west of Melbourne known for its orchards, open landscapes, and relaxed lifestyle. Summers are warm and winters are cool with occasional rainfall. Residents enjoy local markets, parks, and community activities. The area offers a combination of agricultural charm and suburban convenience. Outdoor recreation and family living are central to the town’s lifestyle.",
  pollutionInsight:
    "Air quality is generally good but can be slightly affected by traffic and occasional dust from farming activities. Open landscapes help disperse pollutants efficiently.",
},

"wodonga": {
  description:
    "Wodonga lies on the Victoria-New South Wales border along the Murray River. The city experiences warm summers and cool winters with moderate rainfall. Parks, riverside areas, and community facilities define local life. Residents enjoy cultural events, outdoor recreation, and easy access to regional transport. The city combines urban convenience with a riverside and natural setting.",
  pollutionInsight:
    "Air quality is mostly good with occasional effects from traffic or regional fires. River breezes and open areas help maintain fresh and breathable air.",
},

"wangaratta": {
  description:
    "Wangaratta is a regional city in northeastern Victoria surrounded by hills, vineyards, and farmland. Summers are warm and winters are cool with crisp mornings. The city has parks, community centers, and cultural facilities. Residents enjoy outdoor activities, markets, and recreational spaces. Wangaratta blends rural charm with access to urban services.",
  pollutionInsight:
    "Dust from farming and vehicle traffic may occasionally influence air quality. Overall conditions remain clean due to low industrial activity and prevailing winds.",
},

"warragul": {
  description:
    "Warragul is a town in West Gippsland known for its dairy farms, greenery, and community events. Summers are warm and winters are cool with occasional rainfall. Residents enjoy parks, markets, and cultural festivals. The town provides a relaxed lifestyle within a scenic rural setting. Local rivers and walking trails enhance outdoor recreation.",
  pollutionInsight:
    "Air quality is generally good but may see minor impacts from vehicle emissions or seasonal agricultural activity. Open spaces and breezes help disperse pollutants efficiently.",
},

"wallan": {
  description:
    "Wallan is a growing town north of Melbourne with a mix of residential areas, farms, and open landscapes. Summers are warm and winters are cool. The town is family-friendly with schools, parks, and community spaces. Residents benefit from regional transport links while enjoying rural charm. Outdoor activities and community engagement are common in Wallan.",
  pollutionInsight:
    "Air remains mostly clean with occasional minor effects from traffic and dust. Winds and open terrain help disperse pollutants effectively.",
},

"drouin": {
  description:
    "Drouin is a town in West Gippsland with farmland, parks, and a close-knit community. Summers are warm and winters are cool with moderate rainfall. Residents enjoy outdoor activities, local markets, and community events. The town offers a relaxed lifestyle while remaining connected to regional centers. Natural scenery and open spaces define much of the local charm.",
  pollutionInsight:
    "Air quality is mostly good but may temporarily reduce due to vehicle traffic or agricultural activity. Breezes help maintain fresh air conditions.",
},

"morwell": {
  description:
    "Morwell is a city in the Latrobe Valley surrounded by industrial activity, farmland, and natural reserves. Summers are warm and winters are cool. Residents engage in community events, sports, and outdoor recreation. The city provides regional services and educational facilities. Morwell blends industrial presence with residential and natural surroundings.",
  pollutionInsight:
    "Air quality can be affected by industrial emissions and traffic. Forested areas and wind patterns help disperse pollutants and maintain mostly clean air.",
},

"echuca": {
  description:
    "Echuca is a historic port town along the Murray River famous for paddle steamers and riverside recreation. Summers are warm and winters are cool. Residents enjoy boating, fishing, and community markets. The town offers scenic river views, parks, and cultural attractions. Echuca combines historical charm with active outdoor lifestyles.",
  pollutionInsight:
    "Air remains generally clean but may be temporarily affected by traffic and riverfront activity. Breezes and open river surroundings help maintain healthy air quality.",
},

"bairnsdale": {
  description:
    "Bairnsdale is a regional town in East Gippsland surrounded by rivers, forests, and farmland. Summers are warm and winters are cool. Residents enjoy fishing, hiking, and local events. The town offers access to natural reserves and community facilities. Bairnsdale combines scenic beauty with a relaxed lifestyle.",
  pollutionInsight:
    "Air quality is mostly good with occasional dust from agriculture or traffic. Natural breezes and open spaces help disperse pollutants effectively.",
},

"swan-hill": {
  description:
    "Swan Hill is a regional town along the Murray River with agriculture, vineyards, and riverfront parks. Summers are hot and dry while winters are cool. Residents enjoy outdoor activities, markets, and community events. The town blends river lifestyle with agricultural surroundings and a friendly community atmosphere.",
  pollutionInsight:
    "Air quality can be affected temporarily by dust from farms or vehicle traffic. Open riverfront areas and prevailing winds help maintain fresh air.",
},

"benalla": {
  description:
    "Benalla is a town in northeastern Victoria known for its parks, gardens, and historic buildings. Summers are warm and winters are cool. Residents enjoy outdoor recreation, community events, and cultural festivals. The town provides a calm and scenic environment for families. Agricultural lands and rivers surround Benalla adding to its charm.",
  pollutionInsight:
    "Air quality is generally good with minor fluctuations from traffic or dust. Natural airflow and open spaces support clean air conditions.",
},

"colac": {
  description:
    "Colac is a regional town in southwestern Victoria surrounded by lakes, forests, and farmland. Summers are warm and winters are cool. Residents enjoy outdoor activities, fishing, and community events. The town has strong ties to agriculture and local industry. Colac offers a peaceful lifestyle in a scenic natural setting.",
  pollutionInsight:
    "Air quality is mostly clean with occasional temporary effects from traffic or dust. Surrounding forests and open areas help disperse pollutants effectively.",
},

"mooroopna": {
  description:
    "Mooroopna is a small regional town near Shepparton known for agriculture and rural living. Summers are warm and winters are cool. Residents enjoy a quiet lifestyle, parks, and community activities. The town provides easy access to regional services and educational facilities. Agriculture and open landscapes define the local environment.",
  pollutionInsight:
    "Air is generally clean with minor influences from traffic or farm activities. Occasional dust is dispersed by prevailing winds keeping conditions healthy.",
},

"healesville": {
  description:
    "Healesville is a town in the Yarra Valley famous for wineries, natural parks, and scenic landscapes. Summers are warm and winters are cool with moderate rainfall. Residents enjoy outdoor recreation, community markets, and cultural events. The town provides a mix of rural charm and tourist appeal. Vineyards, forests, and walking trails enhance the lifestyle.",
  pollutionInsight:
    "Air quality is excellent most of the year with minor temporary effects from traffic or tourism. Vegetation and open spaces help maintain clean air consistently.",
},

"kyabram": {
  description:
    "Kyabram is a regional town in northern Victoria known for agriculture, gardens, and community life. Summers are warm and winters are cool. The town has parks, recreational areas, and local markets. Residents enjoy outdoor activities and a relaxed lifestyle. Kyabram blends rural charm with access to regional services and educational facilities.",
  pollutionInsight:
    "Air quality is generally good but can be affected temporarily by dust from farms or vehicle traffic. Open landscapes and wind patterns help keep air clean.",
},

"beauty-point": {
  description:
    "Beauty Point is a small town surrounded by natural landscapes, rivers, and open farmland. Summers are warm and winters are mild. Residents enjoy outdoor recreation, scenic views, and community activities. The town offers a peaceful and quiet lifestyle close to nature. Local parks and rivers enhance recreational opportunities.",
  pollutionInsight:
    "Air quality remains clean most of the year with minor effects from local traffic or dust. Winds and open spaces support dispersion of any pollutants efficiently.",
},
// Queensland
"brisbane": {
  description:
    "Brisbane is the capital of Queensland known for its riverfront lifestyle, modern architecture, and vibrant cultural scene. Summers are hot and humid with frequent thunderstorms while winters are mild and dry. The city offers parks, galleries, theaters, and sporting facilities. Residents enjoy river cruises, outdoor dining, and festivals. Brisbane combines urban development with natural surroundings and community-focused neighborhoods.",
  pollutionInsight:
    "Air quality is generally good but can be affected by traffic congestion, industrial activity, and occasional bushfire smoke. River breezes and coastal winds help disperse pollutants maintaining a healthy urban environment.",
},

"gold-coast": {
  description:
    "Gold Coast is famous for its beaches, surfing culture, theme parks, and high-rise skyline. Summers are hot and humid while winters are mild and sunny. Residents and tourists enjoy outdoor recreation, coastal walks, and vibrant nightlife. The city has diverse neighborhoods, shopping districts, and extensive parklands. Tourism and coastal attractions define much of the lifestyle and economy.",
  pollutionInsight:
    "Air quality is mostly good with minor temporary impacts from vehicle traffic and seasonal fires. Sea breezes help maintain clean air along the coastal areas.",
},

"toowoomba": {
  description:
    "Toowoomba, known as the Garden City, is famous for its parks, gardens, and annual flower festival. Summers are warm and winters are cool with occasional frost. The city has a mix of heritage buildings and modern amenities. Residents enjoy cultural events, outdoor markets, and a strong community lifestyle. Surrounding farmlands contribute to the scenic beauty and open spaces.",
  pollutionInsight:
    "Air quality is generally clean with occasional dust from agriculture or vehicle activity. Wind patterns help disperse pollutants effectively throughout the city.",
},

"townsville": {
  description:
    "Townsville is a coastal city in northern Queensland known for its port, tropical climate, and proximity to the Great Barrier Reef. Summers are hot and humid with cyclones possible while winters are mild and dry. Residents enjoy beaches, outdoor recreation, and cultural attractions. The city blends urban conveniences with natural beauty and marine activities. Community events and festivals are central to local life.",
  pollutionInsight:
    "Air quality is mostly good but can be affected by traffic, industrial emissions, and occasional regional bushfire smoke. Coastal winds and sea breezes help maintain fresh air conditions.",
},

"cairns": {
  description:
    "Cairns is a tropical city famous as the gateway to the Great Barrier Reef and Daintree Rainforest. Summers are hot, humid, and rainy while winters are dry and mild. Residents and tourists enjoy snorkeling, diving, rainforest tours, and outdoor markets. The city has a vibrant multicultural community with cafes, shops, and festivals. Tropical landscapes and coastal attractions define the lifestyle.",
  pollutionInsight:
    "Air quality is usually excellent with minor temporary effects from vehicle traffic or seasonal fires. Sea breezes and rainforest proximity help disperse pollutants efficiently.",
},

"mackay": {
  description:
    "Mackay is a coastal city in central Queensland known for sugar cane fields, mining, and tropical lifestyle. Summers are hot and humid while winters are mild and sunny. Residents enjoy beaches, riverside parks, and community events. The city blends agricultural industry with urban amenities. Outdoor recreation and festivals contribute to a vibrant local life.",
  pollutionInsight:
    "Air quality is mostly good with occasional impacts from industrial activity and vehicle traffic. Coastal winds help maintain clean air throughout the city.",
},

"rockhampton": {
  description:
    "Rockhampton is a regional city on the Fitzroy River famous for its cattle industry, heritage architecture, and tropical climate. Summers are hot and humid while winters are mild and dry. Residents enjoy cultural events, riverfront activities, and outdoor recreation. The city combines regional industry with community lifestyle. Surrounding countryside enhances recreational and scenic opportunities.",
  pollutionInsight:
    "Air quality is generally good but can be temporarily influenced by traffic, industrial operations, or dust from rural areas. River breezes help disperse pollutants naturally.",
},

"herveybay": {
  description:
    "Hervey Bay is a coastal city known for whale watching, beaches, and relaxed lifestyle. Summers are warm and humid while winters are mild and dry. Residents enjoy boating, fishing, and outdoor markets. Tourism and nature-based activities define much of the local economy. The city offers a peaceful coastal environment with family-friendly amenities.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary effects from traffic or seasonal fires. Coastal breezes help maintain fresh and breathable air conditions.",
},

"bundaberg": {
  description:
    "Bundaberg is a regional city famous for sugar cane fields, rum production, and proximity to the southern Great Barrier Reef. Summers are hot and humid while winters are mild and dry. Residents enjoy beaches, rivers, parks, and community festivals. Agriculture and tourism shape the local lifestyle. Bundaberg blends small city conveniences with open rural landscapes.",
  pollutionInsight:
    "Air quality is generally good with occasional dust from agriculture or minor vehicle emissions. Sea and river breezes assist in dispersing pollutants effectively.",
},

"caloundra": {
  description:
    "Caloundra is a coastal city on the Sunshine Coast known for its beaches, surfing, and family-friendly lifestyle. Summers are warm and humid while winters are mild and sunny. Residents enjoy coastal walks, parks, and outdoor recreation. The city combines urban facilities with natural coastal beauty. Tourism, local markets, and community events define the lifestyle.",
  pollutionInsight:
    "Air quality remains mostly excellent with minor temporary effects from traffic or local fires. Sea breezes maintain clean and fresh air conditions.",
},

"narangba": {
  description:
    "Narangba is a suburban town north of Brisbane with residential areas, schools, and parks. Summers are warm and humid while winters are mild and dry. Residents enjoy community activities, outdoor sports, and easy access to urban centers. The town blends suburban convenience with open green spaces and family-friendly neighborhoods.",
  pollutionInsight:
    "Air quality is generally good with minor influences from traffic or occasional dust. Prevailing winds help disperse pollutants efficiently.",
},

"yeppoon": {
  description:
    "Yeppoon is a coastal town in central Queensland known for beaches, water activities, and relaxed lifestyle. Summers are hot and humid while winters are mild and dry. Residents enjoy boating, fishing, and outdoor recreation. Tourism and community events form part of the local economy. Scenic coastlines and nearby national parks define the lifestyle.",
  pollutionInsight:
    "Air quality is mostly clean with occasional minor effects from traffic or regional fires. Sea breezes support dispersion of pollutants naturally.",
},

"maryborough": {
  description:
    "Maryborough is a historic city in Fraser Coast region famous for heritage buildings, riverfront parks, and community events. Summers are warm and humid while winters are mild and dry. Residents enjoy markets, outdoor recreation, and cultural festivals. The city blends historic charm with regional urban amenities and a strong community lifestyle.",
  pollutionInsight:
    "Air quality is generally good but may be influenced temporarily by traffic or dust from nearby rural areas. River breezes help maintain healthy air.",
},

"gracemere": {
  description:
    "Gracemere is a regional town near Rockhampton surrounded by agricultural land and open spaces. Summers are hot and humid while winters are mild and dry. Residents enjoy outdoor activities, local markets, and community life. The town provides a quiet rural lifestyle while remaining close to urban services. Open landscapes enhance recreational opportunities.",
  pollutionInsight:
    "Air quality is mostly clean with minor effects from traffic or dust. Winds across open areas help maintain fresh air conditions.",
},

"gympie": {
  description:
    "Gympie is a regional city in southeastern Queensland known for its gold mining history, riverfront, and cultural events. Summers are warm and humid while winters are mild and dry. Residents enjoy parks, markets, and outdoor festivals. The city combines heritage with modern amenities and a community-focused lifestyle. Natural surroundings provide recreational opportunities.",
  pollutionInsight:
    "Air quality remains generally good with minor temporary impacts from traffic or local fires. Breezes help disperse pollutants efficiently.",
},

"kingaroy": {
  description:
    "Kingaroy is a regional town in South Burnett known for peanuts, agriculture, and community events. Summers are warm and humid while winters are mild and dry. Residents enjoy local parks, outdoor activities, and markets. The town provides a peaceful rural lifestyle with access to regional services and schools.",
  pollutionInsight:
    "Air quality is generally clean with minor temporary effects from dust or vehicle traffic. Open landscapes and prevailing winds assist in dispersing pollutants.",
},

"moranbah": {
  description:
    "Moranbah is a mining town in central Queensland known for coal production and regional services. Summers are hot and humid while winters are mild and dry. Residents enjoy parks, recreational facilities, and community events. The town provides a working lifestyle focused on industry with supporting urban amenities. Surrounding landscapes offer recreational and scenic opportunities.",
  pollutionInsight:
    "Air quality can be affected by mining operations and vehicle traffic. Open spaces and winds help disperse pollutants keeping the air mostly clean.",
},

"mareeba": {
  description:
    "Mareeba is a town in the Atherton Tablelands surrounded by tropical landscapes, farms, and national parks. Summers are hot and wet while winters are mild and dry. Residents enjoy outdoor activities, cultural events, and local markets. The area blends agriculture, tourism, and community life. Scenic surroundings enhance recreational opportunities and lifestyle.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from agricultural activity or traffic. Vegetation and winds assist in dispersing pollutants naturally.",
},

"charters-towers": {
  description:
    "Charters Towers is a regional city in northern Queensland known for gold mining heritage, historic buildings, and rural surroundings. Summers are hot and humid while winters are mild and dry. Residents enjoy community events, outdoor recreation, and cultural festivals. The city offers a mix of heritage charm and regional amenities. Open landscapes support a relaxed lifestyle.",
  pollutionInsight:
    "Air quality is generally good with minor temporary effects from traffic or dust. Winds help disperse pollutants maintaining healthy conditions.",
},

"goondiwindi": {
  description:
    "Goondiwindi is a town on the Queensland-New South Wales border known for agriculture, river activities, and community lifestyle. Summers are warm and humid while winters are mild and dry. Residents enjoy fishing, parks, markets, and local events. The town blends rural charm with access to regional services and amenities.",
  pollutionInsight:
    "Air quality is generally good with minor temporary impacts from dust or vehicle traffic. Open landscapes and breezes help maintain clean air.",
},

"biloela": {
  description:
    "Biloela is a regional town in central Queensland known for agriculture, local industries, and community life. Summers are hot and humid while winters are mild and dry. Residents enjoy parks, community events, and outdoor recreation. The town offers a relaxed lifestyle with access to regional facilities. Open landscapes and rural surroundings enhance the living experience.",
  pollutionInsight:
    "Air quality remains mostly clean with occasional dust from farms or vehicle activity. Winds and open areas support dispersion of pollutants.",
},

"stanthorpe": {
  description:
    "Stanthorpe is a town in the Granite Belt known for vineyards, orchards, and cool climate. Summers are warm while winters can be quite cool. Residents enjoy wine tourism, outdoor recreation, and community festivals. The town blends agricultural charm with scenic landscapes. Parks, rivers, and gardens enhance local lifestyle.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or dust. Open landscapes and winds help maintain healthy air conditions.",
},

"calliope": {
  description:
    "Calliope is a regional town near Gladstone with agricultural surroundings, parks, and community facilities. Summers are hot and humid while winters are mild and dry. Residents enjoy outdoor activities, local markets, and community life. The town combines rural lifestyle with access to urban services and recreational areas.",
  pollutionInsight:
    "Air quality is generally good with minor temporary effects from traffic or dust. Open areas and wind patterns help maintain clean air.",
},

"tannum-sands": {
  description:
    "Tannum Sands is a coastal town near Gladstone with beaches, parks, and a relaxed community lifestyle. Summers are hot and humid while winters are mild and dry. Residents enjoy water activities, outdoor recreation, and local events. The town combines coastal charm with access to regional services. Natural surroundings enhance recreational opportunities and quality of life.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary impacts from traffic or dust. Coastal breezes help disperse pollutants effectively.",
},
// Western Australia 
"perth": {
  description:
    "Perth is the capital of Western Australia, known for its modern skyline, Swan River, and vibrant cultural scene. Summers are hot and dry while winters are mild and wet. Residents enjoy beaches, parks, and outdoor festivals. The city offers shopping districts, theaters, and sporting facilities. Urban development blends with natural attractions like Kings Park and nearby coastal areas.",
  pollutionInsight:
    "Air quality is generally good with minor temporary effects from vehicle traffic or industrial activity. Sea breezes help disperse pollutants maintaining healthy urban conditions.",
},

"greater-perth": {
  description:
    "Greater Perth encompasses the metropolitan area surrounding Perth with suburban neighborhoods, commercial hubs, and recreational areas. Summers are warm and dry while winters are cooler with occasional rain. Residents enjoy parks, riverside walks, and cultural events. The area blends urban convenience with natural spaces and coastal access. Community lifestyle and infrastructure are well developed.",
  pollutionInsight:
    "Air quality is mostly good but can be affected by traffic congestion and occasional industrial emissions. Coastal winds and urban planning help maintain clean air.",
},

"bunbury": {
  description:
    "Bunbury is a coastal city in southwestern Western Australia known for its port, beaches, and marine wildlife. Summers are warm and dry while winters are mild and wet. Residents enjoy water sports, parks, and local markets. The city blends industrial activity with leisure and tourism. Coastal landscapes and community facilities enhance the living experience.",
  pollutionInsight:
    "Air quality is generally clean with minor temporary effects from traffic or port operations. Sea breezes help disperse pollutants efficiently.",
},

"geraldton": {
  description:
    "Geraldton is a regional city on the western coast with a strong maritime heritage, beautiful beaches, and a dry warm climate. Summers are hot and dry while winters are mild. Residents enjoy fishing, boating, and outdoor recreation. The city combines urban amenities with regional charm. Festivals, markets, and coastal lifestyle define the community.",
  pollutionInsight:
    "Air quality is mostly good with minor effects from dust or local traffic. Coastal winds and open spaces help maintain healthy air conditions.",
},

"kalgoorlie": {
  description:
    "Kalgoorlie is a mining town in the Goldfields region known for its rich history, gold mining, and arid climate. Summers are very hot while winters are mild. Residents engage in community events, mining-related activities, and outdoor recreation. The town blends industrial heritage with local lifestyle and cultural events. Surrounding desert landscapes provide unique scenic views.",
  pollutionInsight:
    "Air quality can be influenced by dust from mining and vehicle activity. Open terrain and occasional winds help disperse pollutants, maintaining breathable air.",
},

"busselton": {
  description:
    "Busselton is a coastal city famous for its long jetty, beaches, and tourism. Summers are warm and dry while winters are mild and wet. Residents enjoy water sports, local events, and parks. The city offers a mix of leisure, tourism, and residential areas. Scenic coastlines and community lifestyle define the area.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or regional dust. Sea breezes help maintain clean air conditions.",
},

"karratha": {
  description:
    "Karratha is a regional town in the Pilbara known for mining, industry, and hot arid climate. Summers are extremely hot while winters are warm. Residents experience outdoor recreation, community events, and regional services. The town combines industrial activity with small-town lifestyle and access to natural landscapes. Red earth and rugged terrain characterize the region.",
  pollutionInsight:
    "Air quality can be affected by dust from mining and industrial activity. Winds help disperse pollutants, keeping air mostly clean.",
},

"margaret-river": {
  description:
    "Margaret River is a town in southwestern Western Australia famous for wineries, surf beaches, and forested landscapes. Summers are warm and dry while winters are mild and wet. Residents enjoy wine tourism, surfing, hiking, and cultural events. The town blends natural beauty with a relaxed community lifestyle. Festivals and local markets contribute to the vibrant atmosphere.",
  pollutionInsight:
    "Air quality is generally excellent with minor effects from vehicle traffic or occasional regional dust. Coastal breezes support clean air conditions.",
},

"mandurah": {
  description:
    "Mandurah is a coastal city south of Perth known for waterways, beaches, and recreational boating. Summers are warm and dry while winters are mild and wet. Residents enjoy fishing, parks, community events, and water-based leisure activities. The city combines suburban living with scenic coastal surroundings. Tourism and lifestyle amenities are important aspects of the local community.",
  pollutionInsight:
    "Air quality is mostly good with minor temporary effects from traffic. Sea breezes and waterways help disperse pollutants efficiently.",
},

"dunsborough": {
  description:
    "Dunsborough is a coastal town in the southwest known for beaches, caves, and relaxed lifestyle. Summers are warm and dry while winters are mild. Residents enjoy outdoor recreation, surfing, fishing, and local markets. The town blends natural attractions with a peaceful community environment. Tourism and recreational facilities are central to local life.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or local dust. Coastal winds support clean air throughout the town.",
},

"kununurra": {
  description:
    "Kununurra is a town in northern Western Australia famous for agriculture, lakes, and tropical savanna climate. Summers are hot and wet while winters are dry and mild. Residents enjoy outdoor recreation, fishing, boating, and cultural events. The town blends remote regional life with community activities. Surrounding landscapes provide unique natural beauty.",
  pollutionInsight:
    "Air quality is mostly good with minor temporary effects from dust or vehicle activity. Open landscapes and winds help disperse pollutants naturally.",
},

"manjimup": {
  description:
    "Manjimup is a town in southwestern Western Australia known for timber, agriculture, and scenic forests. Summers are warm and dry while winters are cool and wet. Residents enjoy outdoor activities, markets, and community events. The town blends natural landscapes with a quiet rural lifestyle. Surrounding forests and farmland provide scenic and recreational opportunities.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary impacts from vehicle traffic. Vegetation and breezes help maintain clean air conditions.",
},

"port-hedland": {
  description:
    "Port Hedland is a coastal town in the Pilbara region known for its port, mining, and hot arid climate. Summers are extremely hot while winters are warm. Residents experience industrial work, outdoor recreation, and community life. The town combines industrial activity with regional living. Surrounding terrain is rugged and red, characteristic of the region.",
  pollutionInsight:
    "Air quality can be affected by industrial emissions and dust. Coastal and regional winds help disperse pollutants effectively.",
},

"pinjarra": {
  description:
    "Pinjarra is a town in southwestern Western Australia with historic buildings, rural surroundings, and temperate climate. Summers are warm and dry while winters are mild and wet. Residents enjoy community events, parks, and nearby rivers for recreation. The town blends heritage charm with modern amenities. Surrounding farmlands contribute to a scenic and peaceful lifestyle.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary effects from vehicle traffic or dust. Winds and open areas help disperse pollutants.",
},

"narrogin": {
  description:
    "Narrogin is a regional town in the Wheatbelt with agricultural landscapes, heritage buildings, and community facilities. Summers are warm and dry while winters are mild and wet. Residents enjoy outdoor activities, local markets, and community events. The town blends rural charm with access to services. Open farmland and winds help maintain a clean environment.",
  pollutionInsight:
    "Air quality is generally good with minor temporary effects from dust or vehicle traffic. Natural breezes assist in dispersing pollutants effectively.",
},

"katanning": {
  description:
    "Katanning is a regional town in the Wheatbelt known for agriculture, multicultural community, and heritage architecture. Summers are warm and dry while winters are mild and wet. Residents enjoy outdoor recreation, local markets, and community gatherings. The town combines cultural diversity with rural living. Surrounding farmlands provide scenic views and recreational opportunities.",
  pollutionInsight:
    "Air quality remains mostly clean with minor temporary impacts from traffic or dust. Breezes help maintain healthy conditions throughout the town.",
},

"tom-price": {
  description:
    "Tom Price is a mining town in the Pilbara region known for iron ore, rugged terrain, and hot arid climate. Summers are extremely hot while winters are warm. Residents engage in mining work, community events, and outdoor activities. The town blends industrial activity with scenic landscapes and regional living. Red cliffs and hills characterize the surrounding area.",
  pollutionInsight:
    "Air quality can be influenced by dust from mining and vehicle activity. Winds help disperse pollutants keeping the air mostly clean.",
},

"waroona": {
  description:
    "Waroona is a town in southwestern Western Australia known for agriculture, lakes, and parks. Summers are warm and dry while winters are mild and wet. Residents enjoy outdoor recreation, community events, and local markets. The town blends rural charm with access to urban facilities. Surrounding farmland and greenery enhance scenic beauty and lifestyle.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from dust or traffic. Natural breezes help maintain fresh air conditions.",
},

"merredin": {
  description:
    "Merredin is a regional town in the Wheatbelt with agricultural lands, heritage sites, and community facilities. Summers are warm and dry while winters are mild and wet. Residents enjoy outdoor activities, local markets, and community gatherings. The town blends rural lifestyle with access to essential services. Open farmlands and winds contribute to a scenic and healthy environment.",
  pollutionInsight:
    "Air quality is generally good with minor temporary impacts from dust or vehicle activity. Natural winds help disperse pollutants efficiently.",
},

"lower-chittering": {
  description:
    "Lower Chittering is a small town in southwestern Western Australia known for farms, nature reserves, and temperate climate. Summers are warm and dry while winters are mild and wet. Residents enjoy outdoor activities, local community events, and nature exploration. The town blends rural lifestyle with scenic landscapes and peaceful living.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary effects from dust or vehicle traffic. Open areas and wind patterns help maintain fresh air.",
},

"kambalda-west": {
  description:
    "Kambalda West is a mining town in the Goldfields region known for nickel production and arid climate. Summers are extremely hot while winters are warm. Residents engage in mining work, community life, and outdoor recreation. The town blends industrial activity with small-town living. Surrounding desert landscapes create unique scenery and recreational opportunities.",
  pollutionInsight:
    "Air quality can be affected by mining dust and vehicle activity. Winds help disperse pollutants keeping the air mostly clean.",
},

"jurien-bay": {
  description:
    "Jurien Bay is a coastal town known for beaches, fishing, and marine tourism. Summers are warm and dry while winters are mild. Residents enjoy water sports, local events, and outdoor recreation. The town combines coastal charm with a relaxed community lifestyle. Scenic coastlines and marine activities define much of local life.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or local dust. Coastal breezes help maintain clean air.",
},

"quindalup": {
  description:
    "Quindalup is a small town near Dunsborough in southwestern Western Australia known for wineries, farmland, and relaxed lifestyle. Summers are warm and dry while winters are mild. Residents enjoy outdoor activities, wine tourism, and community events. The town blends rural charm with scenic natural surroundings. Local parks and vineyards enhance the quality of life.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary effects from dust or local vehicle activity. Breezes help maintain fresh air conditions.",
},

"kalbarri": {
  description:
    "Kalbarri is a coastal town known for national park, gorges, and beaches. Summers are hot and dry while winters are mild. Residents enjoy hiking, fishing, boating, and outdoor recreation. Tourism, natural beauty, and outdoor lifestyle define the town. Coastal landscapes and cliffs provide scenic views for locals and visitors.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or dust. Coastal breezes help maintain clean and healthy air.",
},

"port-denison": {
  description:
    "Port Denison is a coastal town near Geraldton known for fishing, beaches, and relaxed coastal living. Summers are warm and dry while winters are mild. Residents enjoy water activities, parks, and local community events. The town blends maritime culture with scenic surroundings and outdoor recreation. Tourism and fishing are central to local life.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or dust. Coastal winds help disperse pollutants efficiently.",
},

"dongara": {
  description:
    "Dongara is a small coastal town near Geraldton known for fishing, agriculture, and heritage sites. Summers are warm and dry while winters are mild. Residents enjoy outdoor activities, riverfront recreation, and community events. The town blends rural charm with coastal attractions. Scenic rivers and beaches enhance the local lifestyle.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary effects from vehicle traffic or dust. Coastal breezes help maintain fresh air throughout the town.",
},
// South Australia 
"adelaide": {
  description:
    "Adelaide is the capital of South Australia, known for its festivals, arts scene, and historic architecture. Summers are hot and dry while winters are mild and wet. Residents enjoy parklands, wine regions nearby, and vibrant cultural events. The city combines urban convenience with coastal proximity and green spaces. Shopping, dining, and recreational facilities enhance the community lifestyle.",
  pollutionInsight:
    "Air quality is generally good with occasional effects from traffic or industrial activity. Coastal winds help disperse pollutants and maintain fresh air throughout the city.",
},

"gawler": {
  description:
    "Gawler is a regional town north of Adelaide, known for heritage buildings, wineries, and surrounding vineyards. Summers are warm while winters are cool and mild. Residents enjoy community events, parks, and outdoor recreation. The town blends historical charm with a relaxed lifestyle. Proximity to Adelaide provides easy access to city amenities and cultural activities.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary impacts from local traffic or dust. Natural breezes help maintain healthy air conditions.",
},

"mount-gambier": {
  description:
    "Mount Gambier is a city in southeastern South Australia famous for volcanic landscapes, sinkholes, and lush gardens. Summers are mild and pleasant while winters can be cool with occasional fog. Residents enjoy outdoor activities, parks, and cultural events. The area combines natural beauty with a calm regional lifestyle. Scenic lakes and gardens enhance the living experience.",
  pollutionInsight:
    "Air quality is generally moderate with occasional fluctuations due to local traffic or agricultural activity. Green spaces support fresh air conditions most of the year.",
    image: "/air-quality/mount-gambier.webp"
},

"whyalla": {
  description:
    "Whyalla is an industrial city on the Eyre Peninsula known for steel production and port activities. Summers are hot while winters are mild and dry. Residents engage in industrial work, recreation along the coast, and community events. The city blends industrial operations with coastal lifestyle and outdoor activities. Surrounding beaches and marine environment are key attractions.",
  pollutionInsight:
    "Air quality can be influenced by industrial emissions and traffic. Coastal winds help disperse pollutants maintaining reasonably clean air.",
},

"mount-barker": {
  description:
    "Mount Barker is a town in the Adelaide Hills with wineries, rolling hills, and a temperate climate. Summers are warm and dry while winters are cool and wet. Residents enjoy hiking, outdoor recreation, and cultural events. The town blends natural landscapes with modern amenities. Scenic vineyards and forests provide both beauty and leisure opportunities.",
  pollutionInsight:
    "Air quality is generally good with minor effects from traffic or local dust. Hills and wind patterns help disperse pollutants naturally.",
},

"murray-bridge": {
  description:
    "Murray Bridge is a riverside town on the Murray River, known for agriculture and scenic river landscapes. Summers are warm while winters are mild and wet. Residents enjoy boating, fishing, parks, and local events. The town blends agricultural charm with recreational lifestyle. Riverfront areas provide natural beauty and leisure opportunities.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary effects from traffic or agricultural dust. River breezes help maintain fresh air conditions.",
},

"port-lincoln": {
  description:
    "Port Lincoln is a coastal city on the Eyre Peninsula famous for fishing, seafood, and maritime activities. Summers are warm and dry while winters are mild. Residents enjoy boating, water sports, and community events. The city blends coastal charm with regional living and outdoor recreation. Scenic coastlines enhance lifestyle and tourism.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary impacts from traffic or port activities. Sea breezes help disperse pollutants efficiently.",
},

"port-pirie": {
  description:
    "Port Pirie is an industrial city on the eastern shore of Spencer Gulf known for smelting and port operations. Summers are warm while winters are mild. Residents engage in industrial work, outdoor activities, and community life. The city combines industrial activity with coastal proximity. Local parks and recreational areas support community engagement.",
  pollutionInsight:
    "Air quality can be affected by industrial emissions and local traffic. Coastal winds aid in dispersing pollutants and maintaining healthy air.",
},

"port-augusta": {
  description:
    "Port Augusta is a regional city at the head of Spencer Gulf known for its mining history and transport hub. Summers are hot and dry while winters are mild. Residents enjoy outdoor recreation, cultural events, and community activities. The city blends industrial heritage with scenic landscapes and regional living. Surrounding desert and gulf areas offer natural beauty and leisure opportunities.",
  pollutionInsight:
    "Air quality is mostly moderate due to industrial activity and dust from arid surroundings. Winds help disperse pollutants and improve air quality.",
},

"strathalbyn": {
  description:
    "Strathalbyn is a historic town in the Adelaide Hills known for heritage architecture, antique shops, and surrounding vineyards. Summers are warm while winters are cool and wet. Residents enjoy parks, community events, and outdoor activities. The town blends cultural charm with a peaceful rural lifestyle. Scenic rivers and gardens enhance the living environment.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from local traffic or dust. Hills and winds support fresh air conditions.",
},

"nuriootpa": {
  description:
    "Nuriootpa is a town in the Barossa Valley famous for wineries, vineyards, and rural landscapes. Summers are warm and dry while winters are cool. Residents enjoy wine tourism, outdoor activities, and local markets. The town combines viticulture with regional charm and community lifestyle. Scenic vineyards and countryside provide a pleasant living experience.",
  pollutionInsight:
    "Air quality is generally clean with minor temporary impacts from traffic or farming activity. Open landscapes and breezes maintain healthy air.",
},

"naracoorte": {
  description:
    "Naracoorte is a regional town known for limestone caves, agriculture, and natural attractions. Summers are warm while winters are cool and mild. Residents enjoy hiking, outdoor recreation, and community events. The town blends natural heritage with rural living. Surrounding landscapes and caves provide scenic and leisure opportunities.",
  pollutionInsight:
    "Air quality is generally good with minor effects from dust or traffic. Natural breezes help disperse pollutants efficiently.",
},

"nairne": {
  description:
    "Nairne is a small town in the Adelaide Hills known for rural charm, heritage homes, and vineyards. Summers are warm while winters are cool and wet. Residents enjoy parks, outdoor activities, and community events. The town blends peaceful rural lifestyle with proximity to Adelaide. Rolling hills and scenic landscapes provide natural beauty and recreational options.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary effects from dust or traffic. Hills and breezes help maintain fresh air.",
},

"moonta": {
  description:
    "Moonta is a historic copper mining town on the Yorke Peninsula known for heritage buildings and cultural festivals. Summers are warm while winters are mild. Residents enjoy local events, beaches, and community activities. The town blends historical significance with coastal charm and rural living. Scenic coastline enhances lifestyle and tourism.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or dust. Coastal winds support clean air conditions.",
},

"victor-harbor": {
  description:
    "Victor Harbor is a coastal town on the Fleurieu Peninsula famous for beaches, whale watching, and scenic landscapes. Summers are warm while winters are mild and wet. Residents enjoy water sports, parks, and outdoor recreation. The town combines coastal beauty with relaxed community lifestyle. Tourism and natural attractions play a central role in the local economy.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary impacts from traffic or dust. Sea breezes help disperse pollutants and maintain fresh air.",
},

"tanunda": {
  description:
    "Tanunda is a town in the Barossa Valley known for vineyards, wine tourism, and German heritage. Summers are warm and dry while winters are cool. Residents enjoy wine festivals, outdoor activities, and community life. The town blends cultural heritage with regional charm. Scenic vineyards and surrounding hills enhance the living experience.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or agricultural activity. Open landscapes and winds help maintain clean air.",
},

"roxby-downs": {
  description:
    "Roxby Downs is a mining town in northern South Australia known for opal and copper mining. Summers are hot and dry while winters are mild. Residents engage in mining work, outdoor recreation, and community activities. The town blends industrial operations with regional living. Surrounding arid landscapes provide unique scenery and leisure opportunities.",
  pollutionInsight:
    "Air quality can be affected by dust from mining and vehicle activity. Winds help disperse pollutants, keeping air mostly clean.",
},

"aldgate": {
  description:
    "Aldgate is a town in the Adelaide Hills with rural charm, vineyards, and heritage homes. Summers are warm while winters are cool and wet. Residents enjoy parks, outdoor activities, and community events. The town combines peaceful rural living with proximity to Adelaide. Scenic hills and natural landscapes provide beauty and leisure opportunities.",
  pollutionInsight:
    "Air quality is generally clean with minor temporary effects from traffic or dust. Hills and breezes support healthy air.",
},

"two-wells": {
  description:
    "Two Wells is a town north of Adelaide known for agriculture, community events, and local markets. Summers are warm while winters are mild. Residents enjoy outdoor activities, parks, and recreational facilities. The town blends rural lifestyle with easy access to urban amenities. Surrounding farmland provides scenic views and natural recreation.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary effects from dust or vehicle traffic. Natural winds help disperse pollutants effectively.",
},

"bordertown": {
  description:
    "Bordertown is a regional town near the Victoria border known for agriculture, heritage sites, and community life. Summers are warm while winters are mild. Residents enjoy local markets, parks, and outdoor recreation. The town blends farming culture with rural living. Open landscapes and natural scenery enhance the quality of life.",
  pollutionInsight:
    "Air quality is generally good with minor temporary impacts from dust or traffic. Natural breezes maintain fresh air conditions.",
},

"barmera": {
  description:
    "Barmera is a town in the Riverland region, famous for Lake Bonney, agriculture, and recreational opportunities. Summers are warm while winters are mild. Residents enjoy water sports, parks, and community activities. The town combines lakeside living with agricultural charm. Scenic surroundings and outdoor leisure define the lifestyle.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or dust. Lake breezes help disperse pollutants naturally.",
},

"moonta-bay": {
  description:
    "Moonta Bay is a coastal town on the Yorke Peninsula known for beaches, fishing, and tourism. Summers are warm while winters are mild. Residents enjoy water activities, community events, and parks. The town blends coastal charm with relaxed lifestyle and scenic landscapes. Tourism and recreational opportunities enhance local life.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or dust. Sea breezes maintain clean air conditions.",
},

"goolwa": {
  description:
    "Goolwa is a riverside town on the Murray Mouth known for boating, heritage, and wetlands. Summers are warm while winters are mild. Residents enjoy water sports, parks, and cultural events. The town blends riverfront charm with community lifestyle. Surrounding natural reserves provide scenic and recreational opportunities.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary effects from traffic or dust. Breezes from the river help maintain healthy air.",
},

"mannum": {
  description:
    "Mannum is a riverside town on the Murray River famous for boating, agriculture, and local heritage. Summers are warm while winters are mild. Residents enjoy outdoor recreation, community events, and river-based activities. The town combines agricultural charm with scenic landscapes and recreational lifestyle.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from dust or traffic. River breezes help disperse pollutants naturally.",
},

"willunga": {
  description:
    "Willunga is a town in the Adelaide Hills known for vineyards, markets, and heritage buildings. Summers are warm while winters are cool and wet. Residents enjoy outdoor activities, wine festivals, and community life. The town blends rural charm with cultural heritage and scenic landscapes. Surrounding hills and vineyards enhance lifestyle and leisure.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary effects from traffic or dust. Hills and breezes maintain fresh air throughout the town.",
},

"port-elliot": {
  description:
    "Port Elliot is a coastal town on the Fleurieu Peninsula known for beaches, whale watching, and heritage architecture. Summers are warm while winters are mild and wet. Residents enjoy outdoor recreation, water activities, and community events. The town blends coastal charm with relaxed lifestyle. Tourism and natural attractions play a central role in local life.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or dust. Sea breezes help maintain clean air conditions.",
},

"angaston": {
  description:
    "Angaston is a town in the Barossa Valley known for wineries, vineyards, and German heritage. Summers are warm and dry while winters are cool. Residents enjoy wine tourism, outdoor activities, and community events. The town combines viticulture with regional charm. Scenic vineyards and surrounding hills enhance living experience and lifestyle.",
  pollutionInsight:
    "Air quality is generally clean with minor temporary effects from traffic or farming activity. Open landscapes and breezes maintain healthy air.",
},

"lobethal": {
  description:
    "Lobethal is a town in the Adelaide Hills known for its forests, heritage homes, and festivals. Summers are warm while winters are cool and wet. Residents enjoy hiking, outdoor recreation, and community events. The town blends natural landscapes with cultural heritage and rural lifestyle. Surrounding forests provide scenic beauty and leisure opportunities.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or dust. Hills and natural breezes help maintain clean air conditions.",
},

"lyndoch": {
  description:
    "Lyndoch is a town in the Barossa Valley famous for vineyards, wineries, and rural charm. Summers are warm while winters are cool. Residents enjoy wine tourism, outdoor activities, and community events. The town blends agricultural lifestyle with scenic surroundings and cultural heritage. Rolling hills and vineyards enhance the living experience and leisure opportunities.",
  pollutionInsight:
    "Air quality is mostly clean with minor temporary effects from traffic or dust. Open landscapes and winds help maintain healthy air conditions.",
},
// Tasmania
"hobart": {
  description:
    "Hobart is the capital of Tasmania, known for its historic waterfront, MONA art museum, and vibrant cultural scene. Summers are mild and sunny while winters are cool and wet. Residents enjoy parks, riverfront walks, and community events. The city combines urban lifestyle with natural beauty, including Mount Wellington and nearby beaches. Local markets, festivals, and culinary experiences enrich daily life.",
  pollutionInsight:
    "Air quality is generally good with minor effects from traffic or wood heating in winter. Coastal and hillside winds help disperse pollutants efficiently.",
},

"launceston": {
  description:
    "Launceston is a city in northern Tasmania famous for Cataract Gorge, historic architecture, and vibrant cultural life. Summers are warm while winters are cool and damp. Residents enjoy parks, gardens, riverside recreation, and local events. The city blends historic charm with modern amenities and community activities. Scenic riverfronts and nearby valleys provide beautiful natural surroundings.",
  pollutionInsight:
    "Air quality is generally clean with minor temporary impacts from traffic or residential heating. Breezes from the surrounding valleys aid in dispersing pollutants.",
},

"devonport": {
  description:
    "Devonport is a coastal city on the north coast of Tasmania, known for the Spirit of Tasmania ferry terminal and beaches. Summers are warm and mild while winters are cool. Residents enjoy boating, fishing, coastal walks, and community events. The city blends port activity with relaxed coastal lifestyle and natural beauty. Surrounding farmlands and beaches enhance recreational opportunities.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or port operations. Coastal winds help maintain fresh air throughout the city.",
},

"ulverstone": {
  description:
    "Ulverstone is a coastal town on the north-west coast of Tasmania, known for its beaches, parks, and riverfront areas. Summers are warm and mild while winters are cool and damp. Residents enjoy outdoor activities, sports, and local events. The town combines coastal charm with community lifestyle. Nearby forests and rivers provide recreational and scenic opportunities.",
  pollutionInsight:
    "Air quality is mostly clean with minor effects from traffic or residential activity. Coastal winds help maintain healthy air conditions.",
},

"new-norfolk": {
  description:
    "New Norfolk is a historic town in the Derwent Valley, famous for its colonial architecture and riverfront. Summers are mild while winters can be cool and damp. Residents enjoy gardening, walking trails, and community events. The town blends heritage charm with regional lifestyle. Surrounding landscapes of rivers and farmland enhance living experience and outdoor recreation.",
  pollutionInsight:
    "Air quality is generally clean with minor temporary effects from wood heating or traffic. Natural breezes help disperse pollutants efficiently.",
},

"port-sorell": {
  description:
    "Port Sorell is a coastal town on the north coast of Tasmania, known for beaches, boating, and holiday lifestyle. Summers are warm and mild while winters are cool. Residents enjoy water sports, coastal walks, and local events. The town blends relaxed seaside living with community engagement. Scenic coastline and nearby natural reserves enhance lifestyle and recreation.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary impacts from traffic. Sea breezes maintain clean air conditions most of the year.",
},

"sorell": {
  description:
    "Sorell is a town near Hobart, known for its historic sites, local markets, and rural surroundings. Summers are warm while winters are cool and damp. Residents enjoy community activities, parks, and outdoor recreation. The town blends small town charm with accessibility to Hobart. Surrounding farmland and bushland provide scenic beauty and leisure opportunities.",
  pollutionInsight:
    "Air quality is generally clean with minor temporary effects from traffic or wood heating. Natural winds help maintain fresh air.",
},

"penguin": {
  description:
    "Penguin is a coastal town on the north-west coast of Tasmania, famous for its beaches, local festivals, and relaxed atmosphere. Summers are warm and mild while winters are cool. Residents enjoy outdoor recreation, community events, and coastal activities. The town blends coastal charm with small town lifestyle. Scenic beaches and nearby parks provide excellent leisure opportunities.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary impacts from traffic. Coastal breezes help maintain fresh and clean air.",
},

"hadspen": {
  description:
    "Hadspen is a town near Launceston, known for its gardens, rivers, and historical charm. Summers are warm while winters are cool and damp. Residents enjoy parks, walking trails, and local events. The town combines scenic landscapes with peaceful regional lifestyle. Nearby rivers and countryside offer recreational and leisure opportunities.",
  pollutionInsight:
    "Air quality is generally clean with minor temporary impacts from traffic. Breezes from surrounding valleys support fresh air conditions.",
},

"huonville": {
  description:
    "Huonville is a town in the Huon Valley, famous for apple orchards, river landscapes, and surrounding forests. Summers are warm and mild while winters are cool and damp. Residents enjoy outdoor activities, farming, and community events. The town blends rural charm with natural beauty. Nearby rivers and hills provide scenic and recreational opportunities.",
  pollutionInsight:
    "Air quality is mostly clean with minor effects from agricultural activity or traffic. Natural breezes help maintain healthy air.",
},

"snug": {
  description:
    "Snug is a small coastal town on the south-east coast of Tasmania, known for beaches, local community, and relaxed lifestyle. Summers are warm and mild while winters are cool. Residents enjoy coastal walks, fishing, and outdoor activities. The town blends seaside charm with regional living. Nearby forests and coastline provide scenic beauty and recreation options.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic. Coastal winds help disperse pollutants effectively.",
},

"seven-mile-beach": {
  description:
    "Seven Mile Beach is a coastal area near Hobart, famous for its long sandy beaches and recreational opportunities. Summers are warm and mild while winters are cool. Residents enjoy water sports, beach activities, and community events. The area combines natural coastal beauty with peaceful lifestyle. Proximity to Hobart allows access to urban amenities.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic. Sea breezes maintain fresh and clean air conditions.",
},

"geeveston": {
  description:
    "Geeveston is a town in southern Tasmania, known for forests, rivers, and proximity to the Huon Valley. Summers are warm and mild while winters are cool and damp. Residents enjoy hiking, outdoor activities, and local community events. The town blends rural charm with natural surroundings. Nearby forests and rivers enhance recreational and scenic opportunities.",
  pollutionInsight:
    "Air quality is mostly clean with minor effects from residential activity or local traffic. Natural breezes help maintain healthy air.",
},

"evandale": {
  description:
    "Evandale is a historic town near Launceston famous for colonial architecture, heritage streets, and community festivals. Summers are warm while winters are cool and damp. Residents enjoy parks, walking trails, and cultural events. The town blends historical charm with peaceful regional lifestyle. Surrounding farmland and river landscapes provide scenic and recreational opportunities.",
  pollutionInsight:
    "Air quality is generally excellent with minor temporary effects from traffic or residential activity. Breezes from surrounding valleys help disperse pollutants effectively.",
},






//---------------------------UAE----------------------------------

};
