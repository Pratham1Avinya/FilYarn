// Comprehensive Product Data for Filyarn Industries Private Limited
// Structured for dynamic filtering, section grouping, and automatic inclusion of future additions.

export const productsData = [
  // --- Section 1: Air Textured Yarn (ATY) ---
  {
    id: "110-aty",
    name: "110 Aty",
    category: "Air Textured Yarn (ATY)",
    series: "ATY Series",
    denier: "110 Denier",
    type: "Polyester Air Textured Yarn",
    lustre: "Semi-Dull",
    filament: "110D / 72F (or custom)",
    intermingle: "Air Textured Looped",
    packageType: "Paper Cone (3.5kg - 4.5kg)",
    shortDesc: "High-bulk, cotton-like feel polyester air-textured yarn engineered for premium apparel and home textiles.",
    longDesc: "110 Aty is manufactured using high-pressure air texturing to introduce micro-loops into continuous polyester filaments. This gives the yarn an organic, cotton-touch feel with high abrasion resistance, dimensional stability, and superior cover factor. Extensively used in Surat and domestic textile hubs for high-end weaving on waterjet and rapier looms.",
    applications: [
      "Weaving & Circular Knitting",
      "Suiting, Shirting & Trouser Fabrics",
      "Ladies Kurtis, Saree & Dress Materials",
      "Furnishing & Upholstery Fabrics"
    ],
    specs: {
      denier: "110 Denier",
      filament: "72F",
      tenacity: "> 3.4 cN/dtex",
      elongation: "20% - 25%",
      shrinkage: "< 2.5% (Boiling Water)",
      package: "Paper Cone 4.0 kg"
    },
    images: [
      "/images/products/110-aty/main.jpg",
      "/images/products/110-aty/angle.jpg",
      "/images/products/110-aty/cone.jpg",
      "/images/products/110-aty/texture.jpg",
      "/images/products/110-aty/package.jpg"
    ],
    tags: ["High Bulk", "Cotton-Touch", "Weaving Ready"]
  },
  {
    id: "110-aty-catonic",
    name: "110 Aty Catonic",
    category: "Air Textured Yarn (ATY)",
    series: "ATY Series",
    denier: "110 Denier",
    type: "Cationic Dyeable Air Textured Yarn (CDP)",
    lustre: "Cationic / Semi-Dull",
    filament: "110D / 72F CDP",
    intermingle: "Air Textured Looped",
    packageType: "Paper Cone (3.5kg - 4.5kg)",
    shortDesc: "Cationic dyeable air-textured yarn offering vivid color pickup, brilliant melange effects, and soft natural handfeel.",
    longDesc: "110 Aty Catonic combines the textured volume of air-jet texturizing with modified cationic polymer chains. When woven together with regular polyester yarns, it allows single-bath cross-dyeing to create stunning two-tone, melange, and heathered visual effects without using multiple dye baths. Highly favored by fashion fabric designers.",
    applications: [
      "Two-Tone Cross-Dye Weaving",
      "Melange Saree & Dress Materials",
      "Fancy Jacquard & Brocade Fabrics",
      "Activewear & Textured Knits"
    ],
    specs: {
      denier: "110 Denier",
      filament: "72F Cationic",
      dyeability: "Cationic Basic Dyes (100°C - 120°C)",
      tenacity: "> 3.0 cN/dtex",
      elongation: "22% - 28%",
      package: "Paper Cone 4.0 kg"
    },
    images: [
      "/images/products/110-aty-catonic/main.jpg",
      "/images/products/110-aty-catonic/angle.jpg",
      "/images/products/110-aty-catonic/cone.jpg",
      "/images/products/110-aty-catonic/texture.jpg",
      "/images/products/110-aty-catonic/package.jpg"
    ],
    tags: ["Cross-Dyeable", "Two-Tone Effect", "Premium Fashion"]
  },
  {
    id: "160-aty",
    name: "160 Aty",
    category: "Air Textured Yarn (ATY)",
    series: "ATY Series",
    denier: "160 Denier",
    type: "Medium-Heavy Air Textured Yarn",
    lustre: "Semi-Dull",
    filament: "160D / 96F",
    intermingle: "High Bulk Air Textured",
    packageType: "Paper Cone (4.0kg - 5.0kg)",
    shortDesc: "Robust 160 denier air textured yarn providing rich body, matte appearance, and high durability for outerwear and furnishing.",
    longDesc: "160 Aty is engineered for medium to heavier weight fabric constructions requiring structural substance, durable tensile properties, and natural yarn texture. With 96 fine filaments textured by turbulent air streams, it imparts high drape, pill resistance, and tear strength for demanding industrial and apparel uses.",
    applications: [
      "Heavy Suitings, Trousers & Blazers",
      "Curtains, Drapery & Sofa Covers",
      "Bags, Luggage Lining & Narrow Tapes",
      "Industrial Workwear & Uniforms"
    ],
    specs: {
      denier: "160 Denier",
      filament: "96F",
      tenacity: "> 3.6 cN/dtex",
      elongation: "20% - 24%",
      bulkiness: "High Loop Density",
      package: "Paper Cone 4.5 kg"
    },
    images: [
      "/images/products/160-aty/main.jpg",
      "/images/products/160-aty/angle.jpg",
      "/images/products/160-aty/cone.jpg",
      "/images/products/160-aty/texture.jpg",
      "/images/products/160-aty/package.jpg"
    ],
    tags: ["Heavy Structure", "High Durability", "Home Textiles"]
  },
  {
    id: "160-aty-catonic",
    name: "160 Aty Catonic",
    category: "Air Textured Yarn (ATY)",
    series: "ATY Series",
    denier: "160 Denier",
    type: "Cationic Dyeable Medium-Heavy ATY",
    lustre: "Cationic / Semi-Dull",
    filament: "160D / 96F CDP",
    intermingle: "High Bulk Air Textured",
    packageType: "Paper Cone (4.0kg - 5.0kg)",
    shortDesc: "Substantial 160D cationic yarn for heavy-weight cross-dyed jacquards, suiting melanges, and decorative home decor.",
    longDesc: "Featuring cationic dyeable chemistry combined with 160D thickness, this yarn is the gold standard for creating contrast upholstery, structured suits, and heavy winter dress materials. Accepts vibrant, deep shades with remarkable wash and light fastness.",
    applications: [
      "Decorative Upholstery & Cushion Covers",
      "Cross-Dyed Blazer & Suiting Fabrics",
      "Rich Texture Winter Wear",
      "Automotive & Contract Fabrics"
    ],
    specs: {
      denier: "160 Denier",
      filament: "96F CDP",
      dyeability: "Basic Dyes",
      tenacity: "> 3.2 cN/dtex",
      elongation: "22% - 26%",
      package: "Paper Cone 4.5 kg"
    },
    images: [
      "/images/products/160-aty-catonic/main.jpg",
      "/images/products/160-aty-catonic/angle.jpg",
      "/images/products/160-aty-catonic/cone.jpg",
      "/images/products/160-aty-catonic/texture.jpg",
      "/images/products/160-aty-catonic/package.jpg"
    ],
    tags: ["Heavy Cross-Dye", "Upholstery", "Rich Shade Depth"]
  },

  // --- Section 2: Lichi Series (Polyester & Cationic) ---
  {
    id: "80-lichi-poli",
    name: "80 lichi poli",
    category: "Lichi Series Yarn",
    series: "Lichi Series",
    denier: "80 Denier",
    type: "Lightweight Polyester Lichi Textured Yarn",
    lustre: "Semi-Dull / Textured",
    filament: "80D Fine Filament",
    intermingle: "High Intermingled (HIM)",
    packageType: "Standard Paper Cone (3.5kg)",
    shortDesc: "Fine 80 denier lichi yarn delivering crisp texture, excellent drape, and airy lightness for luxury sarees and dupattas.",
    longDesc: "80 Lichi Poli is a staple across Surat's weaving sector. Developed with specialized crimp parameters, it produces fabric with a signature pebble-grained 'lichi' surface finish, subtle body, and fluid drape. It weaves flawlessly on high-speed water jet looms with virtually zero filament breaks.",
    applications: [
      "Lightweight Sarees & Chiffon Drapes",
      "Dupattas, Scarves & Stoles",
      "Summer Wear & Ladies Tops",
      "Fine Jacquard Blouses"
    ],
    specs: {
      denier: "80 Denier",
      filament: "48F / 72F",
      tenacity: "> 3.8 cN/dtex",
      intermingleLevel: "80 - 95 knots/m",
      package: "Paper Cone 3.5 kg"
    },
    images: [
      "/images/products/80-lichi-poli/main.jpg",
      "/images/products/80-lichi-poli/angle.jpg",
      "/images/products/80-lichi-poli/cone.jpg",
      "/images/products/80-lichi-poli/texture.jpg",
      "/images/products/80-lichi-poli/package.jpg"
    ],
    tags: ["Fine Denier", "Lichi Texture", "Waterjet Weaving"]
  },
  {
    id: "80-lichi-catonic",
    name: "80 lichi catonic",
    category: "Lichi Series Yarn",
    series: "Lichi Series",
    denier: "80 Denier",
    type: "Cationic Dyeable 80D Lichi Yarn",
    lustre: "Cationic Dyed / Bright Highlights",
    filament: "80D CDP",
    intermingle: "High Intermingled",
    packageType: "Paper Cone (3.5kg)",
    shortDesc: "Lightweight cationic lichi yarn for bright color contrasts, ombre effects, and vibrant sheer fashion fabrics.",
    longDesc: "Engineered with cationic polyester chips, 80 Lichi Catonic allows textile processors to achieve sharp contrast shades and vivid neon/deep hues in lightweight sheer fabrics. Its unique pebble texture refracts light subtly, imparting richness to fine sarees and ladies ethnic ensembles.",
    applications: [
      "Two-Tone Lightweight Sarees",
      "Sheer Blended Georgettes & Chiffons",
      "Embroidered Ethnic Fabric Bases",
      "High-Contrast Fashion Borders"
    ],
    specs: {
      denier: "80 Denier",
      filament: "48F CDP",
      dyeability: "Cationic / Basic Dyes",
      tenacity: "> 3.3 cN/dtex",
      package: "Paper Cone 3.5 kg"
    },
    images: [
      "/images/products/80-lichi-catonic/main.jpg",
      "/images/products/80-lichi-catonic/angle.jpg",
      "/images/products/80-lichi-catonic/cone.jpg",
      "/images/products/80-lichi-catonic/texture.jpg",
      "/images/products/80-lichi-catonic/package.jpg"
    ],
    tags: ["Vibrant Colors", "Lightweight", "Cross-Dye"]
  },
  {
    id: "110-lichi-poli",
    name: "110 lichi Poli",
    category: "Lichi Series Yarn",
    series: "Lichi Series",
    denier: "110 Denier",
    type: "Medium Polyester Lichi Textured Yarn",
    lustre: "Semi-Dull",
    filament: "110D / 72F",
    intermingle: "Intermingled (IM)",
    packageType: "Paper Cone (4.0kg)",
    shortDesc: "Versatile 110 denier lichi yarn offering balanced body, distinct pebble grain, and high tensile consistency.",
    longDesc: "110 Lichi Poli is one of the highest-volume yarns in Surat's textile market. It provides the ideal balance between fabric weight, opacity, and soft pebbled touch. Outstanding running efficiency on rapier, air-jet, and water-jet weaving machines.",
    applications: [
      "Kurti & Tunic Fabrics",
      "Designer Sarees & Lehengas",
      "Shirting & Crepe Weaves",
      "Modern Ethnic Casual Wear"
    ],
    specs: {
      denier: "110 Denier",
      filament: "72F",
      tenacity: "> 3.7 cN/dtex",
      elongation: "22% ± 2%",
      package: "Paper Cone 4.0 kg"
    },
    images: [
      "/images/products/110-lichi-poli/main.jpg",
      "/images/products/110-lichi-poli/angle.jpg",
      "/images/products/110-lichi-poli/cone.jpg",
      "/images/products/110-lichi-poli/texture.jpg",
      "/images/products/110-lichi-poli/package.jpg"
    ],
    tags: ["Market Favorite", "Optimal Body", "Flawless Weaving"]
  },
  {
    id: "110-lichi-catonic",
    name: "110 lichi catonic",
    category: "Lichi Series Yarn",
    series: "Lichi Series",
    denier: "110 Denier",
    type: "Cationic Dyeable 110D Lichi Yarn",
    lustre: "Cationic Semi-Dull",
    filament: "110D / 72F CDP",
    intermingle: "Intermingled (IM)",
    packageType: "Paper Cone (4.0kg)",
    shortDesc: "110D cationic lichi yarn engineered for deep color pickup, dual-tone ethnic collections, and printed crepe bases.",
    longDesc: "110 Lichi Catonic combines the reliable density of 110 denier yarn with cationic chemistry. Widely utilized in warp and weft configurations to create yarn-dyed checks, jacquard patterns, and digital printing fabric grounds that resist fading and pilling.",
    applications: [
      "Digital Print Base Fabrics",
      "Yarn-Dyed Checks & Stripes",
      "Brocade & Festive Sarees",
      "Fashion Dress Materials"
    ],
    specs: {
      denier: "110 Denier",
      filament: "72F CDP",
      dyeability: "Cationic Dyes",
      tenacity: "> 3.2 cN/dtex",
      package: "Paper Cone 4.0 kg"
    },
    images: [
      "/images/products/110-lichi-catonic/main.jpg",
      "/images/products/110-lichi-catonic/angle.jpg",
      "/images/products/110-lichi-catonic/cone.jpg",
      "/images/products/110-lichi-catonic/texture.jpg",
      "/images/products/110-lichi-catonic/package.jpg"
    ],
    tags: ["Print Base", "Dual-Tone", "High Fastness"]
  },
  {
    id: "150-lichi-poli",
    name: "150 lichi Poli",
    category: "Lichi Series Yarn",
    series: "Lichi Series",
    denier: "150 Denier",
    type: "Heavy Polyester Lichi Textured Yarn",
    lustre: "Semi-Dull",
    filament: "150D / 96F",
    intermingle: "High Intermingled",
    packageType: "Paper Cone (4.5kg)",
    shortDesc: "Rich, full-bodied 150 denier lichi yarn designed for structured ladies garments, heavy crepes, and furnishing fabrics.",
    longDesc: "150 Lichi Poli delivers generous fabric weight and remarkable opacity, rendering lining fabrics unnecessary in many apparel styles. Its uniform bulk and high crimp stability guarantee consistent texture across massive production meters.",
    applications: [
      "Heavy Crepe & Moss Crepe Fabrics",
      "Ladies Bottom Wear & Trousers",
      "Curtains & Cushion Fabrics",
      "Structured Anarkalis & Gowns"
    ],
    specs: {
      denier: "150 Denier",
      filament: "96F",
      tenacity: "> 3.6 cN/dtex",
      elongation: "23% ± 2%",
      package: "Paper Cone 4.5 kg"
    },
    images: [
      "/images/products/150-lichi-poli/main.jpg",
      "/images/products/150-lichi-poli/angle.jpg",
      "/images/products/150-lichi-poli/cone.jpg",
      "/images/products/150-lichi-poli/texture.jpg",
      "/images/products/150-lichi-poli/package.jpg"
    ],
    tags: ["Full Body", "Heavy Crepe", "High Opacity"]
  },
  {
    id: "150-lichi-catonic",
    name: "150 lichi Catonic",
    category: "Lichi Series Yarn",
    series: "Lichi Series",
    denier: "150 Denier",
    type: "Heavy Cationic Lichi Textured Yarn",
    lustre: "Cationic / Semi-Dull",
    filament: "150D / 96F CDP",
    intermingle: "High Intermingled",
    packageType: "Paper Cone (4.5kg)",
    shortDesc: "Heavy 150D cationic lichi yarn for contrasting ethnic wear, rich winter fabrics, and textured home furnishings.",
    longDesc: "With 150 denier count and cationic affinity, this yarn is optimal for heavyweight cross-dyed fabrics. It yields intense deep blacks, vibrant maroons, and royal blues when treated with modified basic dyestuffs, setting a benchmark for premium Indian textiles.",
    applications: [
      "Cross-Dyed Heavy Bottom Wear",
      "Heavy Embroidered Lehengas",
      "Upholstery & Drapery Accents",
      "Winter Suiting Blends"
    ],
    specs: {
      denier: "150 Denier",
      filament: "96F CDP",
      dyeability: "Modified Basic Dyes",
      tenacity: "> 3.1 cN/dtex",
      package: "Paper Cone 4.5 kg"
    },
    images: [
      "/images/products/150-lichi-catonic/main.jpg",
      "/images/products/150-lichi-catonic/angle.jpg",
      "/images/products/150-lichi-catonic/cone.jpg",
      "/images/products/150-lichi-catonic/texture.jpg",
      "/images/products/150-lichi-catonic/package.jpg"
    ],
    tags: ["Deep Shades", "Heavy Ethnic", "Contrast Dyeing"]
  },
  {
    id: "200-lichi-poli",
    name: "200 lichi poli",
    category: "Lichi Series Yarn",
    series: "Lichi Series",
    denier: "200 Denier",
    type: "Extra Heavy Polyester Lichi Yarn",
    lustre: "Semi-Dull",
    filament: "200D High Filament",
    intermingle: "High Intermingled",
    packageType: "Paper Cone (5.0kg)",
    shortDesc: "Extra-heavy 200 denier lichi yarn designed for robust structural textiles, outerwear, and heavy-duty home furnishings.",
    longDesc: "200 Lichi Poli represents the heavy tier of the lichi series. Engineered for applications requiring dense fabric weight, superior seam strength, and high abrasion endurance while maintaining the signature pebbled touch of lichi yarn.",
    applications: [
      "Heavy Furnishings, Sofa & Cushion Covers",
      "Heavy Winter Jackets & Outerwear",
      "Tapestry & Table Linen Fabrics",
      "Industrial & Decorative Narrow Tapes"
    ],
    specs: {
      denier: "200 Denier",
      filament: "96F / 144F",
      tenacity: "> 3.5 cN/dtex",
      elongation: "24% ± 2%",
      package: "Paper Cone 5.0 kg"
    },
    images: [
      "/images/products/200-lichi-poli/main.jpg",
      "/images/products/200-lichi-poli/angle.jpg",
      "/images/products/200-lichi-poli/cone.jpg",
      "/images/products/200-lichi-poli/texture.jpg",
      "/images/products/200-lichi-poli/package.jpg"
    ],
    tags: ["Extra Heavy", "High Strength", "Sofa & Furnishing"]
  },
  {
    id: "200-lichi-catonic",
    name: "200 lichi catonic",
    category: "Lichi Series Yarn",
    series: "Lichi Series",
    denier: "200 Denier",
    type: "Extra Heavy Cationic Lichi Yarn",
    lustre: "Cationic Semi-Dull",
    filament: "200D High Filament CDP",
    intermingle: "High Intermingled",
    packageType: "Paper Cone (5.0kg)",
    shortDesc: "Maximum-density 200D cationic lichi yarn for deep-dyed upholstery, contrast jacquard tapestries, and winter textiles.",
    longDesc: "When heavy thickness and striking color contrast are required, 200 Lichi Catonic is the preferred industrial yarn. Enables rich color depths and crisp visual demarcation in complex jacquard patterns and heavy upholstery weaves.",
    applications: [
      "High-Contrast Jacquard Upholstery",
      "Hotel & Contract Drapery",
      "Heavy Decorative Tapestries",
      "Thick Winter Jackets & Overcoats"
    ],
    specs: {
      denier: "200 Denier",
      filament: "High Filament CDP",
      dyeability: "Basic Dyes",
      tenacity: "> 3.0 cN/dtex",
      package: "Paper Cone 5.0 kg"
    },
    images: [
      "/images/products/200-lichi-catonic/main.jpg",
      "/images/products/200-lichi-catonic/angle.jpg",
      "/images/products/200-lichi-catonic/cone.jpg",
      "/images/products/200-lichi-catonic/texture.jpg",
      "/images/products/200-lichi-catonic/package.jpg"
    ],
    tags: ["Max Density", "Jacquard Accent", "Contract Drapery"]
  },

  // --- Section 3: Bright Filament Yarn (BRT) ---
  {
    id: "50-brt",
    name: "50 Brt",
    category: "Bright Filament (BRT)",
    series: "BRT Series",
    denier: "50 Denier",
    type: "Bright Polyester Filament Yarn",
    lustre: "Super Bright (Trilobal)",
    filament: "50D / 24F - 36F",
    intermingle: "Non-Intermingled / Intermingled",
    packageType: "Paper Cone / Cheese (3.0kg)",
    shortDesc: "Ultra-fine 50 denier bright filament yarn with luminous silk-like sheen for delicate zari weaves, borders, and embroidery.",
    longDesc: "50 Brt is extruded with a trilobal cross-section that maximizes internal and surface light refraction. This gives the yarn a brilliant, mirror-like gloss reminiscent of raw silk. Commonly used as highlight yarns in sarees, fine metallic twists, and luxury sheer borders.",
    applications: [
      "Zari & Metallic Yarn Blending",
      "Saree Borders & Pallu Highlights",
      "High-Lustre Sheer Fabrics",
      "Computerized Embroidery & Zari Work"
    ],
    specs: {
      denier: "50 Denier",
      filament: "24F / 36F Trilobal",
      tenacity: "> 4.2 cN/dtex",
      lustre: "Bright Gloss",
      package: "Paper Cone 3.0 kg"
    },
    images: [
      "/images/products/50-brt/main.jpg",
      "/images/products/50-brt/angle.jpg",
      "/images/products/50-brt/cone.jpg",
      "/images/products/50-brt/texture.jpg",
      "/images/products/50-brt/package.jpg"
    ],
    tags: ["Super Bright", "Silk Sheen", "Zari Blending"]
  },
  {
    id: "75-brt",
    name: "75 Brt",
    category: "Bright Filament (BRT)",
    series: "BRT Series",
    denier: "75 Denier",
    type: "Bright Polyester Filament Yarn",
    lustre: "Bright (Trilobal)",
    filament: "75D / 36F - 48F",
    intermingle: "Intermingled (IM)",
    packageType: "Paper Cone (3.5kg)",
    shortDesc: "High-shine 75 denier filament yarn providing radiant gloss, high tensile strength, and smooth warp beam preparation.",
    longDesc: "75 Brt is the core filament yarn of Surat's festive and partywear textile trade. Provides consistent tension during warping and sizing, with vibrant shine that elevates satin, satin crepe, and organza weaves into high-value commercial fabrics.",
    applications: [
      "Satin & Poly Satin Fabrics",
      "Organza & Tissue Sarees",
      "Fancy Weaving Highlights & Checks",
      "Ribbons, Laces & Narrow Fabrics"
    ],
    specs: {
      denier: "75 Denier",
      filament: "36F / 48F",
      tenacity: "> 4.0 cN/dtex",
      elongation: "22% - 26%",
      package: "Paper Cone 3.5 kg"
    },
    images: [
      "/images/products/75-brt/main.jpg",
      "/images/products/75-brt/angle.jpg",
      "/images/products/75-brt/cone.jpg",
      "/images/products/75-brt/texture.jpg",
      "/images/products/75-brt/package.jpg"
    ],
    tags: ["Radiant Shine", "Satin Weaving", "High Tenacity"]
  },
  {
    id: "100-brt",
    name: "100 Brt",
    category: "Bright Filament (BRT)",
    series: "BRT Series",
    denier: "100 Denier",
    type: "Heavy Bright Polyester Filament Yarn",
    lustre: "Bright Gloss",
    filament: "100D / 48F - 72F",
    intermingle: "Intermingled",
    packageType: "Paper Cone (4.0kg)",
    shortDesc: "Substantial 100 denier bright filament yarn for intense lustre, heavy bridal satins, brocades, and lining textiles.",
    longDesc: "100 Brt combines heavy 100D thickness with a high-refraction bright cross section. It produces smooth, gleaming fabric surfaces with zero fuzz or pill, making it indispensable for rich bridal wear, luxury hotel drapery, and high-visibility linings.",
    applications: [
      "Heavy Bridal Satin & Duchess Satin",
      "Brocade Weaving & Jacquard Highlights",
      "Luxury Bedspreads & Quilting Linings",
      "Decorative Ribbons & Badges"
    ],
    specs: {
      denier: "100 Denier",
      filament: "48F / 72F",
      tenacity: "> 3.9 cN/dtex",
      elongation: "24% ± 2%",
      package: "Paper Cone 4.0 kg"
    },
    images: [
      "/images/products/100-brt/main.jpg",
      "/images/products/100-brt/angle.jpg",
      "/images/products/100-brt/cone.jpg",
      "/images/products/100-brt/texture.jpg",
      "/images/products/100-brt/package.jpg"
    ],
    tags: ["Bridal Satin", "Intense Gloss", "Brocades"]
  },

  // --- Section 4: Specialty & Textured Yarns ---
  {
    id: "110-monica",
    name: "110 monica",
    category: "Specialty & Textured Yarn",
    series: "Specialty Series",
    denier: "110 Denier",
    type: "Specialty Textured Monica Yarn",
    lustre: "Silky Matte / Semi-Dull",
    filament: "110D Specialized Profile",
    intermingle: "Controlled Intermingled",
    packageType: "Paper Cone (4.0kg)",
    shortDesc: "Distinctive 'Monica' textured yarn renowned for rich handfeel, crepe-like bounce, and elegant fabric recovery.",
    longDesc: "110 Monica is a specialty engineered textured yarn with calibrated differential shrinkage and crimp recovery. Fabrics woven with Monica yarn exhibit a resilient springy bounce, anti-wrinkle drape, and a sophisticated matte handfeel cherished in designer ethnic and western garments.",
    applications: [
      "Monica Crepe & Georgette Fabrics",
      "Designer Anarkali Suits & Kurtas",
      "Wrinkle-Free Western Tops & Dresses",
      "High-Fashion Women's Apparel"
    ],
    specs: {
      denier: "110 Denier",
      recoveryRate: "> 92%",
      tenacity: "> 3.5 cN/dtex",
      elongation: "26% ± 3%",
      package: "Paper Cone 4.0 kg"
    },
    images: [
      "/images/products/110-monica/main.jpg",
      "/images/products/110-monica/angle.jpg",
      "/images/products/110-monica/cone.jpg",
      "/images/products/110-monica/texture.jpg",
      "/images/products/110-monica/package.jpg"
    ],
    tags: ["Spring Bounce", "Anti-Wrinkle", "Designer Crepe"]
  },
  {
    id: "80-roto",
    name: "80 Roto",
    category: "Specialty & Textured Yarn",
    series: "Specialty Series",
    denier: "80 Denier",
    type: "High-Intermingled Roto Yarn",
    lustre: "Semi-Dull",
    filament: "80D / 48F Roto",
    intermingle: "High Intermingle (> 100 knots/m)",
    packageType: "Paper Cone (3.5kg)",
    shortDesc: "High-intermingled 80D Roto yarn engineered for zero-breakage warp preparation on ultra-speed rapier and waterjet looms.",
    longDesc: "80 Roto yarn undergoes intensive pneumatic intermingling (roto-matting) to bind filament strands together tightly without twist. This enables weavers to run the yarn directly as warp without sizing in many constructions, dramatically cutting weaving preparation costs and cycle times.",
    applications: [
      "High-Speed Warp & Weft Weaving",
      "Sizing-Free Fabric Production",
      "Saree & Scarf Ground Weaves",
      "Technical Linings & Uniform Fabrics"
    ],
    specs: {
      denier: "80 Denier",
      filament: "48F",
      knotCount: "100 - 120 knots/metre",
      tenacity: "> 4.1 cN/dtex",
      package: "Paper Cone 3.5 kg"
    },
    images: [
      "/images/products/80-roto/main.jpg",
      "/images/products/80-roto/angle.jpg",
      "/images/products/80-roto/cone.jpg",
      "/images/products/80-roto/texture.jpg",
      "/images/products/80-roto/package.jpg"
    ],
    tags: ["Zero Sizing", "High Intermingle", "Warp Ready"]
  },
  {
    id: "100-400-anmol",
    name: "100/400 Anmol",
    category: "Specialty & Textured Yarn",
    series: "Specialty Series",
    denier: "100/400 Denier (Dual Slub)",
    type: "Fancy Slub / Dual Count Textured Yarn",
    lustre: "Semi-Dull / Textured Contrast",
    filament: "Composite Filament Slub",
    intermingle: "Irregular Textured Intermingle",
    packageType: "Paper Cone (4.0kg)",
    shortDesc: "Signature 'Anmol' fancy slub yarn creating natural linen-like thick-and-thin surface relief in ethnic and home fabrics.",
    longDesc: "100/400 Anmol is a high-demand fancy composite yarn featuring controlled slub intervals alternating between 100 denier base and 400 denier thick points. It replicates the rustic texture of raw linen or khadi while retaining the easy care, washability, and strength of 100% polyester.",
    applications: [
      "Linen-Look Shirting & Kurtas",
      "Khadi-Texture Sarees & Dupattas",
      "Rustic Curtains & Cushion Covers",
      "Fancy Jacquard Effect Wefts"
    ],
    specs: {
      denier: "100 Denier (Base) / 400 Denier (Slub)",
      slubFrequency: "Calibrated Random Intervals",
      tenacity: "> 3.2 cN/dtex",
      package: "Paper Cone 4.0 kg"
    },
    images: [
      "/images/products/100-400-anmol/main.jpg",
      "/images/products/100-400-anmol/angle.jpg",
      "/images/products/100-400-anmol/cone.jpg",
      "/images/products/100-400-anmol/texture.jpg",
      "/images/products/100-400-anmol/package.jpg"
    ],
    tags: ["Linen Look", "Fancy Slub", "Rustic Texture"]
  },

  // --- Section 5: Spun Polyester Yarn ---
  {
    id: "30-spun",
    name: "30 Spun",
    category: "Spun Polyester Yarn",
    series: "Spun Series",
    denier: "30s Ne (English Count)",
    type: "100% Spun Polyester Ring / Vortex Spun",
    lustre: "Optical White / Raw White",
    filament: "100% Virgin Staple Fibre 1.2D x 38mm",
    intermingle: "Spun Twisted Single",
    packageType: "Paper Cone (1.89kg - 2.5kg)",
    shortDesc: "Premium 30s spun polyester yarn with uniform twist and minimal hairiness, ideal for circular knitting and sewing threads.",
    longDesc: "30 Spun is spun from high-tenacity 100% virgin polyester staple fibres on modern high-speed ring spinning frames. Features optimal twist multiplier, controlled CV% value, and low knot count. Outstanding for circular single jersey knitting, downstream yarn package dyeing, and 2-ply sewing thread manufacturing.",
    applications: [
      "Circular & Flat Knitting (T-shirts, Polos)",
      "Sewing Thread Doubling (30/2, 30/3)",
      "Warp & Weft Shirting Weaves",
      "Downstream Yarn Package Dyeing"
    ],
    specs: {
      count: "30s Ne (Single)",
      csp: "> 3200",
      tpi: "21.5 ± 0.5",
      hairiness: "S3 < 800",
      package: "Paper Cone 1.89 kg"
    },
    images: [
      "/images/products/30-spun/main.jpg",
      "/images/products/30-spun/angle.jpg",
      "/images/products/30-spun/cone.jpg",
      "/images/products/30-spun/texture.jpg",
      "/images/products/30-spun/package.jpg"
    ],
    tags: ["Virgin Staple", "Knitting Grade", "Thread Base"]
  },
  {
    id: "40-spun",
    name: "40 Spun",
    category: "Spun Polyester Yarn",
    series: "Spun Series",
    denier: "40s Ne (English Count)",
    type: "100% Spun Polyester Fine Count Yarn",
    lustre: "Raw White / Optical White",
    filament: "100% Virgin Staple Fibre 1.2D x 38mm",
    intermingle: "Ring Spun Twisted Single",
    packageType: "Paper Cone (1.89kg - 2.5kg)",
    shortDesc: "Fine 40s count spun polyester yarn engineered for high-tenacity sewing threads (40/2) and lightweight knitted fabrics.",
    longDesc: "40 Spun is the textile industry's gold standard for industrial garment stitching threads (when plied as 40/2) and fine summer apparel. Engineered to resist high needle heat in automated sewing machines and running smoothly without tension spikes.",
    applications: [
      "Garment Sewing Thread Manufacturing (40/2)",
      "Fine Gauge Knitting & Lycra Blends",
      "Sheer Voile & Pocketing Fabrics",
      "Apparel Seaming & Overlocking"
    ],
    specs: {
      count: "40s Ne (Single)",
      csp: "> 3350",
      tpi: "25.0 ± 0.5",
      hairiness: "S3 < 650",
      package: "Paper Cone 1.89 kg"
    },
    images: [
      "/images/products/40-spun/main.jpg",
      "/images/products/40-spun/angle.jpg",
      "/images/products/40-spun/cone.jpg",
      "/images/products/40-spun/texture.jpg",
      "/images/products/40-spun/package.jpg"
    ],
    tags: ["Fine 40s Count", "Sewing Thread Core", "High Tenacity"]
  }
];

// Helper: Extract unique categories dynamically from the products data array
export const getUniqueCategories = (products = productsData) => {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  return ["All", ...categories];
};

// Helper: Group products by category dynamically
export const getProductsGroupedByCategory = (products = productsData) => {
  return products.reduce((acc, product) => {
    const cat = product.category || "Other Yarns";
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(product);
    return acc;
  }, {});
};

// Pre-formatted WhatsApp inquiry message generator
export const generateWhatsAppLink = (product, phoneNumber = "919157135001") => {
  const specText = product.denier || product.specs?.count || product.type;
  const message = `Hello Filyarn Industries, I would like to inquire about *${product.name}* (${product.category}, ${specText}). Please share wholesale pricing, minimum order quantity (MOQ), and availability.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
