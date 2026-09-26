import Image from "next/image";

interface Product {
  id: string;
  sku: string;
  title: string;
  feature1: string;
  feature2: string;
  description: string;
  imageSrc: string;
}

export default function Products() {
  const products: Product[] = [
    {
      id: "1",
      sku: "ER-MB-101",
      title: "Microfibre T-Shirt Bra",
      feature1: "WIRED  •  LIGHTLY LINED",
      feature2: "A—DD CUP  •  EVERYDAY SUPPORT",
      description: "Clean edges / invisible under clothing",
      imageSrc: "/product-1.png"
    },
    {
      id: "2",
      sku: "ER-MB-102",
      title: "Microfibre Bralette",
      feature1: "NON-WIRED  •  REMOVABLE PADS",
      feature2: "XS—XL  •  LIGHT SUPPORT",
      description: "Bonded seams / second skin feel",
      imageSrc: "/product-2.png"
    },
    {
      id: "3",
      sku: "ER-MB-103",
      title: "Microfibre Plunge",
      feature1: "WIRED  •  GRADUATED PADDING",
      feature2: "A—D CUP  •  MEDIUM SUPPORT",
      description: "Deep V neckline / smooth profile",
      imageSrc: "/product-3.png"
    },
    {
      id: "4",
      sku: "ER-MB-104",
      title: "Microfibre Balconette",
      feature1: "WIRED  •  UNLINED",
      feature2: "B—E CUP  •  FULL SUPPORT",
      description: "Supportive cradle / wide straps",
      imageSrc: "/product-4.png"
    },
    {
      id: "5",
      sku: "ER-SL-105",
      title: "Soft Lace Bralette",
      feature1: "NON-WIRED  •  SOFT CUP",
      feature2: "XS—XL  •  LIGHT SUPPORT",
      description: "Longline lace / elastic underband",
      imageSrc: "/product-1.png"
    },
    {
      id: "6",
      sku: "ER-SL-106",
      title: "Soft Lace Balconette",
      feature1: "WIRED  •  LIGHTLY LINED",
      feature2: "B—DD CUP  •  MEDIUM SUPPORT",
      description: "Open neckline / shaped side panel",
      imageSrc: "/product-2.png"
    },
    {
      id: "7",
      sku: "ER-SL-107",
      title: "Soft Lace Longline",
      feature1: "WIRED  •  NON-PADDED",
      feature2: "B—DD CUP  •  MEDIUM SUPPORT",
      description: "Extended lace cradle / fashion fit",
      imageSrc: "/product-3.png"
    },
    {
      id: "8",
      sku: "ER-SL-108",
      title: "Soft Lace Plunge",
      feature1: "WIRED  •  PUSH UP",
      feature2: "A—C CUP  •  MAXIMUM SUPPORT",
      description: "Scalloped edge / contrast lining",
      imageSrc: "/product-4.png"
    }
  ];

  return (
    <section className="w-full bg-[#f9f2ea] overflow-hidden pb-[80px] lg:pb-[150px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px]">
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[40px] lg:gap-y-[85px]">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-[#fefaf6] border border-[#d2bfaf] rounded-[26px] overflow-hidden flex flex-col relative w-full h-[445px] transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative w-full h-[282px] shrink-0">
                <Image src={product.imageSrc} alt={product.title} fill className="object-cover" />
              </div>

              {/* Product Info */}
              <div className="flex flex-col px-[19px] pt-[22px] pb-[16px] flex-grow relative">
                
                {/* SKU */}
                <p className="text-[#b86e58] text-[8.7px] font-medium tracking-[1.35px] leading-[15px] uppercase mb-[12px]">
                  {product.sku}
                </p>
                
                {/* Title */}
                <h3 className="font-playfair text-[#1b2845] text-[21px] leading-[26px] mb-[8px]">
                  {product.title}
                </h3>
                
                {/* Features */}
                <p className="text-[#4a505e] text-[8.2px] font-medium tracking-[1px] leading-[14px] uppercase mb-[10px] whitespace-pre-wrap">
                  {product.feature1}
                </p>
                <p className="text-[#4a505e] text-[8.2px] font-medium tracking-[0.85px] leading-[14px] uppercase mb-[10px] whitespace-pre-wrap">
                  {product.feature2}
                </p>
                
                {/* Description and Add Icon aligned at bottom */}
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-[#4a505e] text-[10.2px] leading-[16px] pr-4">
                    {product.description}
                  </p>
                  <span className="text-[#1b2845] text-[17px] font-medium leading-[20px] shrink-0">
                    +
                  </span>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
