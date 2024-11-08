import { create } from 'zustand';
import { Data } from '@/types/briefs';

interface BriefStoreState {
  searchQuery: string;
  briefs: Data[];
  filteredBriefs: Data[];
  setSearchQuery: (query: string) => void;
  fetchBriefs: () => Promise<void>;
}

export const useBriefStore = create<BriefStoreState>((set, get) => ({
  searchQuery: '',
  briefs: [],
  filteredBriefs: [],
  
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });

    const filtered = get().briefs.filter((brief) =>
      brief.title.toLowerCase().includes(query.toLowerCase())
    );
    set({ filteredBriefs: filtered });
  },

  fetchBriefs: async () => {
    try {
      const response = await fetch(
        `https://www.api.briefsea.com/forum/discussion/threads/pagination/limit?count=0`,
        {
          headers: {
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2RldGFpbCI6eyJ1c2VyX2lkIjoiNjcyYzU4N2MyOTljNjJmOWVmMzJmZDJhIiwidXNlck5hbWUiOiIiLCJmaXJzdE5hbWUiOiJZb2dlc2giLCJsYXN0TmFtZSI6IlRhdmV0aGl5YSIsInVzZXJfbmFtZSI6IllvZ2VzaCBUYXZldGhpeWEiLCJlbWFpbCI6InRhdmV0aGl5YXJvY2tzQGdtYWlsLmNvbSIsInR5cGUiOiJmcmVlbGFuY2VyIiwiYXZhdGFyU3JjIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSm1jUE9uUUdLOFY2VDdheVRqOWxxQzFWUVlpSlVoaEVoZkNXVUI5OEQ1clB3aHRnND1zOTYtYyJ9LCJpYXQiOjE3MzA5NjM5MjF9.XBUltFPn7y6k6WocsJnCuGs0h7-hwvtT0M0jgViG2Ko',
          },
        }
      );

      const data: Data[] = await response.json();
      set({ briefs: data, filteredBriefs: data });
      console.log(data, 'brief brief')
    } catch (error) {
      console.error('Error fetching briefs:', error);
    }
  },
}));
