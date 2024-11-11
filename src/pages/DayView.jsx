import { useParams } from 'react-router-dom';
import { dailyContent } from '../data/displayContent';
import Modal from '../components/Modal';

function DayView() {
  const { dayId } = useParams();
  const content = dailyContent[dayId];

  if (!content) {
    return <p>Ugyldig dag eller ingen innhold tilgjengelig.</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-red">
      <Modal content={content} />
    </div>
  );
}

export default DayView;