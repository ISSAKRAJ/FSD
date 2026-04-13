import { createNotice, getNotices } from './actions/notice';
import NoticeGrid from './components/NoticeGrid';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const notices = await getNotices();

  return (
    <main className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Notice Board</h1>
        <p className="text-slate-400">Real-time style dashboard shell using server actions and SQLite.</p>
      </header>

      <form
        action={createNotice}
        className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-black/20"
      >
        <input
          name="title"
          placeholder="Notice title"
          className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none ring-cyan-400/50 placeholder:text-slate-500 focus:ring-2"
          required
        />
        <textarea
          name="content"
          placeholder="Write your notice"
          className="min-h-28 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none ring-cyan-400/50 placeholder:text-slate-500 focus:ring-2"
          required
        />
        <button
          type="submit"
          className="inline-flex w-fit items-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Publish Notice
        </button>
      </form>

      <NoticeGrid notices={notices} />
    </main>
  );
}
