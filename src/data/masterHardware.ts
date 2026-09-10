export interface MasterCpuDetails {
  masterId: number;
  family: string;
  processorClass: string;
  socket: string;
}

export interface MasterCpuItem {
  masterId: number;
  displayName: string;
  brand: string;
  cpus: MasterCpuDetails;
}

export interface MasterCpuResponse {
  status: string;
  data: MasterCpuItem[];
}

export const masterHardwareData: MasterCpuItem[] = [
  {
    masterId: 1,
    displayName: "Intel Core i9 14900K",
    brand: "Intel",
    cpus: {
      masterId: 1,
      family: "Core i9",
      processorClass: "14900K",
      socket: "LGA1700"
    }
  },
  {
    masterId: 2,
    displayName: "Intel Core i7 14700K",
    brand: "Intel",
    cpus: {
      masterId: 2,
      family: "Core i7",
      processorClass: "14700K",
      socket: "LGA1700"
    }
  },
  {
    masterId: 3,
    displayName: "Intel Core i7 14700F",
    brand: "Intel",
    cpus: {
      masterId: 3,
      family: "Core i7",
      processorClass: "14700F",
      socket: "LGA1700"
    }
  },
  {
    masterId: 4,
    displayName: "Intel Core i5 14600K",
    brand: "Intel",
    cpus: {
      masterId: 4,
      family: "Core i5",
      processorClass: "14600K",
      socket: "LGA1700"
    }
  },
  {
    masterId: 5,
    displayName: "Intel Core i5 14400F",
    brand: "Intel",
    cpus: {
      masterId: 5,
      family: "Core i5",
      processorClass: "14400F",
      socket: "LGA1700"
    }
  },
  {
    masterId: 6,
    displayName: "Intel Core i5 12400F",
    brand: "Intel",
    cpus: {
      masterId: 6,
      family: "Core i5",
      processorClass: "12400F",
      socket: "LGA1700"
    }
  },
  {
    masterId: 7,
    displayName: "Intel Core i3 12100F",
    brand: "Intel",
    cpus: {
      masterId: 7,
      family: "Core i3",
      processorClass: "12100F",
      socket: "LGA1700"
    }
  },
  {
    masterId: 8,
    displayName: "AMD Ryzen 7 7700",
    brand: "AMD",
    cpus: {
      masterId: 8,
      family: "Ryzen 7",
      processorClass: "7700",
      socket: "AM5"
    }
  },
  {
    masterId: 9,
    displayName: "AMD Ryzen 7 7700X",
    brand: "AMD",
    cpus: {
      masterId: 9,
      family: "Ryzen 7",
      processorClass: "7700X",
      socket: "AM5"
    }
  },
  {
    masterId: 10,
    displayName: "AMD Ryzen 7 7800X3D",
    brand: "AMD",
    cpus: {
      masterId: 10,
      family: "Ryzen 7",
      processorClass: "7800X3D",
      socket: "AM5"
    }
  },
  {
    masterId: 11,
    displayName: "AMD Ryzen 5 7600X",
    brand: "AMD",
    cpus: {
      masterId: 11,
      family: "Ryzen 5",
      processorClass: "7600X",
      socket: "AM5"
    }
  },
  {
    masterId: 12,
    displayName: "AMD Ryzen 5 7500F",
    brand: "AMD",
    cpus: {
      masterId: 12,
      family: "Ryzen 5",
      processorClass: "7500F",
      socket: "AM5"
    }
  },
  {
    masterId: 13,
    displayName: "AMD Ryzen 9 7950X3D",
    brand: "AMD",
    cpus: {
      masterId: 13,
      family: "Ryzen 9",
      processorClass: "7950X3D",
      socket: "AM5"
    }
  },
  {
    masterId: 14,
    displayName: "AMD Ryzen 9 7900X",
    brand: "AMD",
    cpus: {
      masterId: 14,
      family: "Ryzen 9",
      processorClass: "7900X",
      socket: "AM5"
    }
  },
  {
    masterId: 15,
    displayName: "AMD Ryzen 7 5700X3D",
    brand: "AMD",
    cpus: {
      masterId: 15,
      family: "Ryzen 7",
      processorClass: "5700X3D",
      socket: "AM4"
    }
  },
  {
    masterId: 16,
    displayName: "AMD Ryzen 5 5600X",
    brand: "AMD",
    cpus: {
      masterId: 16,
      family: "Ryzen 5",
      processorClass: "5600X",
      socket: "AM4"
    }
  },
  {
    masterId: 17,
    displayName: "AMD Ryzen 5 5600G",
    brand: "AMD",
    cpus: {
      masterId: 17,
      family: "Ryzen 5",
      processorClass: "5600G",
      socket: "AM4"
    }
  }
];

export async function apiSearchMasterCpu(query: string, delayMs = 350): Promise<MasterCpuResponse> {
  // Simulate network latency for API call
  await new Promise(resolve => setTimeout(resolve, delayMs));

  if (!query || !query.trim()) {
    return {
      status: "success",
      data: []
    };
  }

  const q = query.trim().toLowerCase();
  const filtered = masterHardwareData.filter(item => {
    return (
      item.brand.toLowerCase().includes(q) ||
      item.displayName.toLowerCase().includes(q) ||
      item.cpus.family.toLowerCase().includes(q) ||
      item.cpus.processorClass.toLowerCase().includes(q) ||
      item.cpus.socket.toLowerCase().includes(q)
    );
  });

  return {
    status: "success",
    data: filtered
  };
}

export function queryMasterCpuHardware(query: string): MasterCpuResponse {
  if (!query || !query.trim()) {
    return {
      status: "success",
      data: masterHardwareData
    };
  }

  const q = query.trim().toLowerCase();
  const filtered = masterHardwareData.filter(item => {
    return (
      item.brand.toLowerCase().includes(q) ||
      item.displayName.toLowerCase().includes(q) ||
      item.cpus.family.toLowerCase().includes(q) ||
      item.cpus.processorClass.toLowerCase().includes(q) ||
      item.cpus.socket.toLowerCase().includes(q)
    );
  });

  return {
    status: "success",
    data: filtered
  };
}
