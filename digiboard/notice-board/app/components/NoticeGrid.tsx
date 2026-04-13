import NoticeCard from './NoticeCard';

type NoticeItem = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
};

type NoticeGridProps = {
  notices: NoticeItem[];
};

export default function NoticeGrid({ notices }: NoticeGridProps) {
  if (!notices.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-8 text-center text-slate-400">
        No notices yet. Add the first one from the form above.
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          title={notice.title}
          content={notice.content}
          createdAt={new Date(notice.createdAt).toLocaleString()}
        />
      ))}
    </section>
  );
}
