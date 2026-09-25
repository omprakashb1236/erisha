import { definePlugin } from 'sanity';
import LeadsTool from './components/LeadsTool';

const optOutLeadsTool = () => {
  return {
    title: 'Opt Out Leads',
    name: 'optOutLeads',
    component: () => (
      LeadsTool()
    ),
  }
}

export const optOutLeadPlugin = definePlugin({
  name: 'optOutLeadPlugin',
  
  tools: [ 
    optOutLeadsTool() 
  ],
});
