-- Run ONLY against a dedicated EC Empire Supabase project.
-- MVP demo scoreboard: NOT tamper-resistant; do not use for prizes.
create table if not exists public.scores (
 id uuid primary key,
 name text not null check (char_length(name) between 1 and 28),
 path text not null check (char_length(path) between 1 and 80),
 net_worth bigint not null check (net_worth between -100000000 and 1000000000),
 cash bigint not null check (cash between 0 and 1000000000),
 business_value bigint not null check (business_value between 0 and 1000000000),
 debt bigint not null check (debt between 0 and 1000000000),
 ownership real not null check (ownership between 0 and 1),
 created_at timestamptz not null default now(),
 constraint net_worth_correct check (abs(net_worth - (cash + round(business_value * ownership)::bigint - debt)) <= 2)
);
create index if not exists scores_net_worth_idx on public.scores (net_worth desc);
alter table public.scores enable row level security;
create policy "Anyone can view scores" on public.scores for select to anon, authenticated using (true);
create policy "Demo users can submit a score" on public.scores for insert to anon, authenticated with check (true);
grant select, insert on public.scores to anon, authenticated;
