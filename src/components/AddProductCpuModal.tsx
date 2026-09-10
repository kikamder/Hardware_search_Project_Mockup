import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronDown, Check, Loader2, Cpu } from 'lucide-react';
import { apiSearchMasterCpu, MasterCpuItem } from '../data/masterHardware';

interface AddProductCpuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newProduct: any) => void;
}

export default function AddProductCpuModal({ isOpen, onClose, onSave }: AddProductCpuModalProps) {
  // Master Hardware Form State
  const [brand, setBrand] = useState('');
  const [family, setFamily] = useState('');
  const [processorClass, setProcessorClass] = useState('');
  const [socket, setSocket] = useState('');

  // Store Product Form State
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState<'มีสินค้า' | 'หมด'>('มีสินค้า');
  const [warranty, setWarranty] = useState('');
  const [description, setDescription] = useState('');

  // Dropdown / Autocomplete State
  const [brandSuggestions, setBrandSuggestions] = useState<MasterCpuItem[]>([]);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [isSearchingBrand, setIsSearchingBrand] = useState(false);

  const [processorSuggestions, setProcessorSuggestions] = useState<MasterCpuItem[]>([]);
  const [showProcessorDropdown, setShowProcessorDropdown] = useState(false);
  const [isSearchingProcessor, setIsSearchingProcessor] = useState(false);

  const [showSocketDropdown, setShowSocketDropdown] = useState(false);
  const [showWarrantyDropdown, setShowWarrantyDropdown] = useState(false);

  // Common socket options
  const socketOptions = ['AM5', 'AM4', 'LGA1700', 'LGA1200', 'LGA1851'];
  // Common warranty options
  const warrantyOptions = [
    'ไม่มีการรับประกัน',
    '1 ปี',
    '2 ปี',
    '3 ปี',
    '5 ปี',
    'ตลอดอายุการใช้งาน (Lifetime)'
  ];

  const brandRef = useRef<HTMLDivElement>(null);
  const processorRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<HTMLDivElement>(null);
  const warrantyRef = useRef<HTMLDivElement>(null);

  const brandTimeoutRef = useRef<any>(null);
  const processorTimeoutRef = useRef<any>(null);

  // Reset form when opened
  useEffect(() => {
    if (isOpen) {
      setBrand('');
      setFamily('');
      setProcessorClass('');
      setSocket('');
      setProductName('');
      setPrice('');
      setStatus('มีสินค้า');
      setWarranty('');
      setDescription('');
      setShowBrandDropdown(false);
      setShowProcessorDropdown(false);
      setShowSocketDropdown(false);
      setShowWarrantyDropdown(false);
      setIsSearchingBrand(false);
      setIsSearchingProcessor(false);
    }
  }, [isOpen]);

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (brandTimeoutRef.current) clearTimeout(brandTimeoutRef.current);
      if (processorTimeoutRef.current) clearTimeout(processorTimeoutRef.current);
    };
  }, []);

  // Click outside to close suggestion dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (brandRef.current && !brandRef.current.contains(event.target as Node)) {
        setShowBrandDropdown(false);
      }
      if (processorRef.current && !processorRef.current.contains(event.target as Node)) {
        setShowProcessorDropdown(false);
      }
      if (socketRef.current && !socketRef.current.contains(event.target as Node)) {
        setShowSocketDropdown(false);
      }
      if (warrantyRef.current && !warrantyRef.current.contains(event.target as Node)) {
        setShowWarrantyDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // When user selects a master hardware suggestion (nested CPU auto-fill)
  const handleSelectMasterItem = (item: MasterCpuItem) => {
    // Fill nested CPU fields
    setBrand(item.brand);
    setFamily(item.cpus.family);
    setProcessorClass(item.cpus.processorClass);
    setSocket(item.cpus.socket);

    // Auto-fill display name into store product name
    setProductName(item.displayName);

    // Close dropdowns
    setShowBrandDropdown(false);
    setShowProcessorDropdown(false);
  };

  // Handle typing in Brand text box with Debounce and simulated API call
  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setBrand(val);

    if (brandTimeoutRef.current) {
      clearTimeout(brandTimeoutRef.current);
    }

    // Must type first! If empty, do not show dropdown
    if (!val.trim()) {
      setShowBrandDropdown(false);
      setBrandSuggestions([]);
      setIsSearchingBrand(false);
      return;
    }

    // Show dropdown with loading state
    setShowBrandDropdown(true);
    setIsSearchingBrand(true);

    // Debounce 350ms before simulated API fetch
    brandTimeoutRef.current = setTimeout(async () => {
      try {
        const res = await apiSearchMasterCpu(val, 350);
        setBrandSuggestions(res.data);
      } catch (err) {
        console.error('Failed to search master hardware:', err);
      } finally {
        setIsSearchingBrand(false);
      }
    }, 350);
  };

  // Handle typing in Processor text box with Debounce and simulated API call
  const handleProcessorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setProcessorClass(val);

    if (processorTimeoutRef.current) {
      clearTimeout(processorTimeoutRef.current);
    }

    if (!val.trim()) {
      setShowProcessorDropdown(false);
      setProcessorSuggestions([]);
      setIsSearchingProcessor(false);
      return;
    }

    setShowProcessorDropdown(true);
    setIsSearchingProcessor(true);

    processorTimeoutRef.current = setTimeout(async () => {
      try {
        const res = await apiSearchMasterCpu(val, 350);
        setProcessorSuggestions(res.data);
      } catch (err) {
        console.error('Failed to search master hardware:', err);
      } finally {
        setIsSearchingProcessor(false);
      }
    }, 350);
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand || !processorClass || !productName || !price) {
      alert('กรุณากรอกข้อมูลที่จำเป็น (*) ให้ครบถ้วน');
      return;
    }

    const formattedPrice = price.replace(/,/g, '');
    const numPrice = Number(formattedPrice);

    onSave({
      id: Date.now(),
      name: productName,
      cat: 'CPU',
      brand: brand,
      price: isNaN(numPrice) ? price : numPrice.toLocaleString(),
      status: status === 'มีสินค้า' ? 'พร้อมขาย' : 'หมดสต๊อก',
      family,
      processorClass,
      socket,
      warranty,
      description
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl border border-slate-100 relative my-auto max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-8 pt-7 pb-4 shrink-0 border-b border-slate-50">
          <h2 className="text-xl font-bold text-blue-600">
            เพิ่มสินค้า (CPU)
          </h2>
          <button 
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6 overflow-y-auto flex-1 custom-scrollbar">

          {/* Section 1: ข้อมูลฮาร์ดแวร์ (Master Data) */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-bold text-slate-800 whitespace-nowrap">
                ข้อมูลฮาร์ดแวร์ (Master Data)
              </span>
              <div className="h-[1px] bg-slate-100 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* แบรนด์ * */}
              <div className="relative" ref={brandRef}>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  แบรนด์ <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={brand}
                    onChange={handleBrandChange}
                    placeholder="พิมพ์แบรนด์ (เช่น AMD, Intel)"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 pr-9 transition-colors placeholder:text-slate-400"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    {isSearchingBrand ? (
                      <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Suggestions Dropdown for Brand / Master Hardware (Opens ONLY when typing) */}
                {showBrandDropdown && brand.trim().length > 0 && (
                  <div className="absolute z-50 left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
                    {isSearchingBrand ? (
                      <div className="flex items-center gap-2.5 px-4 py-3.5 text-sm text-slate-500">
                        <Loader2 className="w-4 h-4 animate-spin text-blue-600 shrink-0" />
                        <span>กำลังค้นหา Master Hardware ({brand})...</span>
                      </div>
                    ) : brandSuggestions.length > 0 ? (
                      <div>
                        <div className="px-3.5 py-2 text-[11px] font-bold text-slate-500 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                          <span>Master Hardware ({brandSuggestions.length} รายการ)</span>
                          <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                            คลิกเพื่อกรอกอัตโนมัติ
                          </span>
                        </div>
                        <div className="max-h-60 overflow-y-auto custom-scrollbar p-1.5">
                          {brandSuggestions.map(item => (
                            <div
                              key={item.masterId}
                              onClick={() => handleSelectMasterItem(item)}
                              className="px-3.5 py-2.5 hover:bg-blue-50 rounded-xl cursor-pointer transition-colors flex flex-col group border border-transparent hover:border-blue-100"
                            >
                              <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                                {item.displayName}
                              </span>
                              <span className="text-xs text-slate-400 mt-0.5">
                                แบรนด์: <strong className="text-slate-600 font-medium">{item.brand}</strong> | 
                                Family: <strong className="text-slate-600 font-medium">{item.cpus.family}</strong> | 
                                Socket: <strong className="text-slate-600 font-medium">{item.cpus.socket}</strong>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="px-4 py-3 text-xs text-slate-400 text-center">
                        ไม่พบข้อมูลฮาร์ดแวร์ที่ตรงกับ "{brand}"
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Family * */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Family <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={family}
                    onChange={e => setFamily(e.target.value)}
                    placeholder="เลือก Family"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Processor * */}
              <div className="relative" ref={processorRef}>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Processor <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={processorClass}
                    onChange={handleProcessorChange}
                    placeholder="กรอก Processor (เช่น 12400F, 7600X)"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 pr-9 transition-colors placeholder:text-slate-400"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    {isSearchingProcessor && (
                      <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    )}
                  </div>
                </div>

                {/* Suggestions Dropdown for Processor (Opens ONLY when typing) */}
                {showProcessorDropdown && processorClass.trim().length > 0 && (
                  <div className="absolute z-50 left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
                    {isSearchingProcessor ? (
                      <div className="flex items-center gap-2.5 px-4 py-3 text-sm text-slate-500">
                        <Loader2 className="w-4 h-4 animate-spin text-blue-600 shrink-0" />
                        <span>กำลังค้นหา Processor ({processorClass})...</span>
                      </div>
                    ) : processorSuggestions.length > 0 ? (
                      <div>
                        <div className="px-3.5 py-2 text-[11px] font-bold text-slate-500 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                          <span>Master Hardware ({processorSuggestions.length} รายการ)</span>
                          <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                            คลิกเพื่อกรอกอัตโนมัติ
                          </span>
                        </div>
                        <div className="max-h-60 overflow-y-auto custom-scrollbar p-1.5">
                          {processorSuggestions.map(item => (
                            <div
                              key={item.masterId}
                              onClick={() => handleSelectMasterItem(item)}
                              className="px-3.5 py-2.5 hover:bg-blue-50 rounded-xl cursor-pointer transition-colors flex flex-col group border border-transparent hover:border-blue-100"
                            >
                              <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                                {item.displayName}
                              </span>
                              <span className="text-xs text-slate-400 mt-0.5">
                                Processor: <strong className="text-slate-600 font-medium">{item.cpus.processorClass}</strong> | 
                                Socket: <strong className="text-slate-600 font-medium">{item.cpus.socket}</strong>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="px-4 py-3 text-xs text-slate-400 text-center">
                        ไม่พบข้อมูลฮาร์ดแวร์ที่ตรงกับ "{processorClass}"
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Socket * */}
              <div className="relative" ref={socketRef}>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Socket <span className="text-red-500">*</span>
                </label>
                <div 
                  onClick={() => setShowSocketDropdown(!showSocketDropdown)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 cursor-pointer flex items-center justify-between bg-white"
                >
                  <span className={socket ? 'text-slate-800 font-medium' : 'text-slate-400'}>
                    {socket || 'เลือก Socket'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>

                {showSocketDropdown && (
                  <div className="absolute z-50 left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl p-1.5">
                    {socketOptions.map(opt => (
                      <div
                        key={opt}
                        onClick={() => {
                          setSocket(opt);
                          setShowSocketDropdown(false);
                        }}
                        className={`px-3 py-2 rounded-xl text-sm cursor-pointer flex items-center justify-between ${
                          socket === opt ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{opt}</span>
                        {socket === opt && <Check className="w-4 h-4 text-blue-600" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: ข้อมูลสินค้าของร้าน */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-bold text-slate-800 whitespace-nowrap">
                ข้อมูลสินค้าของร้าน
              </span>
              <div className="h-[1px] bg-slate-100 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* ชื่อสินค้าที่แสดงในร้าน * */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  ชื่อสินค้าที่แสดงในร้าน <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={e => setProductName(e.target.value)}
                  placeholder="กรอกชื่อสินค้าที่ต้องการแสดง"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400"
                />
              </div>

              {/* ราคา (บาท) * */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  ราคา (บาท) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    placeholder="กรอกราคา"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 pr-12 transition-colors placeholder:text-slate-400 font-medium"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium">
                    บาท
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* สถานะสินค้า * */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  สถานะสินค้า <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-6 pt-1">
                  <label className="flex items-center cursor-pointer select-none">
                    <div className="relative flex items-center justify-center mr-2">
                      <input
                        type="radio"
                        name="productStatus"
                        checked={status === 'มีสินค้า'}
                        onChange={() => setStatus('มีสินค้า')}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        status === 'มีสินค้า' ? 'border-blue-600 bg-blue-600' : 'border-slate-300 bg-white'
                      }`}>
                        {status === 'มีสินค้า' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-slate-700">มีสินค้า</span>
                  </label>

                  <label className="flex items-center cursor-pointer select-none">
                    <div className="relative flex items-center justify-center mr-2">
                      <input
                        type="radio"
                        name="productStatus"
                        checked={status === 'หมด'}
                        onChange={() => setStatus('หมด')}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        status === 'หมด' ? 'border-blue-600 bg-blue-600' : 'border-slate-300 bg-white'
                      }`}>
                        {status === 'หมด' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-slate-700">หมด</span>
                  </label>
                </div>
              </div>

              {/* การรับประกัน (ไม่บังคับ) */}
              <div className="relative" ref={warrantyRef}>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  การรับประกัน (ไม่บังคับ)
                </label>
                <div 
                  onClick={() => setShowWarrantyDropdown(!showWarrantyDropdown)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 cursor-pointer flex items-center justify-between bg-white"
                >
                  <span className={warranty ? 'text-slate-800 font-medium' : 'text-slate-400'}>
                    {warranty || 'เลือกระยะเวลาการรับประกัน'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>

                {showWarrantyDropdown && (
                  <div className="absolute z-50 left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl p-1.5">
                    {warrantyOptions.map(opt => (
                      <div
                        key={opt}
                        onClick={() => {
                          setWarranty(opt);
                          setShowWarrantyDropdown(false);
                        }}
                        className={`px-3 py-2 rounded-xl text-sm cursor-pointer flex items-center justify-between ${
                          warranty === opt ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{opt}</span>
                        {warranty === opt && <Check className="w-4 h-4 text-blue-600" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* รายละเอียดสินค้า */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                รายละเอียดสินค้า
              </label>
              <textarea
                rows={4}
                maxLength={1000}
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="อธิบายรายละเอียดสินค้า จุดเด่น สเปคสำคัญ เงื่อนไขการรับประกัน ฯลฯ"
                className="w-full border border-slate-200 rounded-2xl p-3.5 text-sm text-slate-800 outline-none focus:border-blue-500 resize-none transition-colors placeholder:text-slate-400"
              ></textarea>
              <div className="text-right text-xs text-slate-400 mt-1">
                {description.length} / 1000
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 transition-colors"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
            >
              บันทึกสินค้า
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
