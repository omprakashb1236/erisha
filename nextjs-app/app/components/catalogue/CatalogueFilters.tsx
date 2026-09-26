"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useState, Suspense } from "react";

interface FilterOption {
  title: string;
  slug: { current: string };
}

interface FilterGroup {
  label: string;
  paramName: string;
  options: FilterOption[];
}

interface CatalogueFiltersProps {
  filterGroups: FilterGroup[];
}

function CatalogueFiltersInner({ filterGroups }: CatalogueFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Simple state to handle dropdown toggles
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleFilterChange = (paramName: string, value: string) => {
    setOpenDropdown(null); // close dropdown
    router.push(pathname + "?" + createQueryString(paramName, value), { scroll: false });
  };

  const clearFilters = () => {
    setOpenDropdown(null);
    router.push(pathname, { scroll: false });
  };

  const hasActiveFilters = Array.from(searchParams.keys()).length > 0;

  return (
    <div className="flex flex-wrap items-center gap-[20px] relative z-20">
      {filterGroups.map((group, idx) => {
        const activeValueSlug = searchParams.get(group.paramName);
        const activeOption = group.options.find(opt => opt.slug.current === activeValueSlug);
        const label = activeOption ? activeOption.title : group.label;
        const isOpen = openDropdown === group.paramName;

        return (
          <div key={idx} className="relative z-20">
            <button 
              onClick={() => setOpenDropdown(isOpen ? null : group.paramName)}
              className={`flex items-center justify-between bg-[#fefaf6] border ${isOpen || activeValueSlug ? 'border-[#1b2845]' : 'border-[#d2bfaf]'} rounded-[21px] h-[42px] min-w-[165px] px-[17px] hover:border-[#1b2845] transition-colors shrink-0`}
            >
              <span className={`text-[10.5px] font-medium leading-[18px] ${activeValueSlug ? 'text-[#b86e58]' : 'text-[#1b2845]'}`}>
                {label}
              </span>
              {/* Dropdown Chevron */}
              <svg 
                className={`ml-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L5 5L9 1" stroke="#4a505e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-[48px] left-0 bg-[#fefaf6] border border-[#d2bfaf] rounded-[16px] py-2 min-w-[165px] shadow-lg flex flex-col z-30">
                <button
                  onClick={() => handleFilterChange(group.paramName, "")}
                  className="text-left px-[17px] py-2 text-[10.5px] font-medium text-[#1b2845] hover:bg-[#f3ebe2] transition-colors"
                >
                  All
                </button>
                {group.options.map((opt) => (
                  <button
                    key={opt.slug.current}
                    onClick={() => handleFilterChange(group.paramName, opt.slug.current)}
                    className="text-left px-[17px] py-2 text-[10.5px] font-medium text-[#1b2845] hover:bg-[#f3ebe2] hover:text-[#b86e58] transition-colors"
                  >
                    {opt.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button 
          onClick={clearFilters}
          className="flex items-center justify-center bg-[#fefaf6] rounded-[21px] h-[42px] px-6 lg:ml-auto hover:bg-[#f3ebe2] transition-colors shrink-0 border border-[#fefaf6] hover:border-[#d2bfaf]"
        >
          <span className="text-[#b86e58] text-[10.5px] font-medium leading-[18px]">
            Clear filters
          </span>
        </button>
      )}

      {/* Click outside to close (simple overlay) */}
      {openDropdown && (
        <div 
          className="fixed inset-0 z-10"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </div>
  );
}

export default function CatalogueFilters({ filterGroups }: CatalogueFiltersProps) {
  return (
    <Suspense fallback={<div className="h-[42px] min-w-[165px] flex items-center shrink-0">Loading filters...</div>}>
      <CatalogueFiltersInner filterGroups={filterGroups} />
    </Suspense>
  );
}
