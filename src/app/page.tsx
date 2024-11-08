import { useBriefStore } from '@/store/useBriefStore';
import { PlaceholdersAndVanishInputDemo } from '@/components/changingInput';
import { ExpandableCardDemo } from '@/components/ui/expndable-card-ui';
import { get } from 'http';

const Home = async () => {
  const { fetchBriefs, briefs } = useBriefStore.getState();

  await fetchBriefs();
  console.log(briefs, 'home side brief')
  

  return (
    <div className="h-screen w-full bg-neutral-700 relative flex space-y-4 flex-col p-4">
      <PlaceholdersAndVanishInputDemo data={[]} />
      <ExpandableCardDemo data={briefs} />
    </div>
  );
};

export default Home;
