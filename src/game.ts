export type PathId = 'startup'|'acquisition'|'franchise'|'innovation'|'corporate'|'social'|'partner'|'investor'|'unicorn';
export type Pathway = {id:PathId;name:string;icon:string;tagline:string;description:string;cash:number;value:number;debt:number;ownership:number;skill:number;risk:number};
export type Card = {id:string;name:string;category:string;description:string;lesson:string;cost:number;skill:number;risk:number;gain:number;variance:number;paths?:PathId[];debt?:number;special?:'raise'|'repay'|'sell'|'cash'|'pivot'|'venturedebt'};
export type Event = {name:string;description:string;cash:number;value:number;risk:number};
export type HistoryItem = {turn:number;card:string;message:string;delta:number;event?:string;lesson:string};
export type Game = {id:string;player:string;path:Pathway;turn:number;cash:number;value:number;debt:number;ownership:number;skill:number;risk:number;hand:string[];history:HistoryItem[];status:'playing'|'finished';seed:number;round:number};
export type Score = {id:string;name:string;path:string;netWorth:number;cash:number;value:number;debt:number;ownership:number;date:string};
export const MAX_TURNS=10;
export const paths:Pathway[]=[
{id:'startup',name:'Startup Founder',icon:'Rocket',tagline:'Start from zero. Build something new.',description:'Validate an idea, win customers, and build a company.',cash:30000,value:0,debt:0,ownership:1,skill:8,risk:12},
{id:'acquisition',name:'Business Buyer',icon:'Handshake',tagline:'Buy an existing cash-flowing business.',description:'Use valuation, due diligence and financing to acquire operations.',cash:50000,value:0,debt:0,ownership:1,skill:5,risk:17},
{id:'franchise',name:'Franchise Owner',icon:'Store',tagline:'Operate a proven system.',description:'Evaluate franchise economics, run locations and expand.',cash:43000,value:0,debt:0,ownership:1,skill:6,risk:10},
{id:'innovation',name:'Technology Innovator',icon:'Lightbulb',tagline:'Commercialize an invention.',description:'Turn R&D, research and intellectual property into enterprise value.',cash:30000,value:0,debt:0,ownership:1,skill:10,risk:20},
{id:'corporate',name:'Corporate Entrepreneur',icon:'Building2',tagline:'Build inside a larger organization.',description:'Launch new products and create a path toward a spinout.',cash:38000,value:0,debt:0,ownership:0.8,skill:7,risk:8},
{id:'social',name:'Social Entrepreneur',icon:'HeartHandshake',tagline:'Profit and purpose can coexist.',description:'Solve a community problem with a sustainable business model.',cash:30000,value:0,debt:0,ownership:1,skill:7,risk:10},
{id:'partner',name:'Operating Partner',icon:'Users',tagline:'Join a team and earn your stake.',description:'Contribute expertise and build value through partnerships.',cash:40000,value:0,debt:0,ownership:0.8,skill:9,risk:11},
{id:'investor',name:'Investor',icon:'ChartNoAxesCombined',tagline:'Allocate capital. Manage risk.',description:'Evaluate businesses, capital structure and potential returns.',cash:60000,value:0,debt:0,ownership:1,skill:4,risk:18},
{id:'unicorn',name:'Unicorn Founder',icon:'Crown',tagline:'Master the craft. Protect your stake.',description:'A venture-backed high-growth founder with maximum entrepreneurial skill, zero starting risk, and significant investor dilution.',cash:38875,value:0,debt:0,ownership:.15,skill:100,risk:0}
];
export const cards:Card[]=[
{id:'discover',name:'Interview Customers',category:'RESEARCH',description:'Learn what customers really want before spending heavily.',lesson:'Customer discovery reduces uncertainty; a clever product without customers has little value.',cost:1200,skill:3,risk:-7,gain:2200,variance:1100},
{id:'launch',name:'Launch a Venture',category:'BUILD',description:'Turn your idea into a product, service, or first location.',lesson:'An idea becomes a business when customers pay for the value you create.',cost:12000,skill:1,risk:11,gain:27000,variance:17000},
{id:'buy',name:'Buy a Business',category:'ACQUIRE',description:'Put down equity, finance the rest, and buy an operating company.',lesson:'Leverage accelerates acquisitions, but debt service increases financial risk.',cost:25000,skill:1,risk:16,gain:83000,variance:23000,debt:35000,paths:['acquisition','investor','partner','startup']},
{id:'franchise',name:'Open a Franchise',category:'FRANCHISE',description:'Purchase a business system and open your first unit.',lesson:'A recognizable brand can help, but fees and unit economics determine profitability.',cost:17000,skill:1,risk:9,gain:34000,variance:17000,debt:9000,paths:['franchise','investor','partner','corporate']},
{id:'invent',name:'Develop New Technology',category:'INNOVATE',description:'Invest in research, prototypes and intellectual property.',lesson:'Technical success is not the same as commercial demand.',cost:10000,skill:2,risk:13,gain:25000,variance:22000,paths:['innovation','startup','corporate','social','unicorn']},
{id:'sales',name:'Run a Sales Sprint',category:'REVENUE',description:'Acquire customers and strengthen distribution.',lesson:'Sales growth is valuable when it comes at a sustainable acquisition cost.',cost:5000,skill:1,risk:6,gain:15500,variance:9000},
{id:'mentor',name:'Find a Mentor',category:'NETWORK',description:'Meet an experienced entrepreneur and learn from mistakes.',lesson:'Relationships improve access, judgment, and opportunity recognition.',cost:1200,skill:3,risk:-7,gain:2500,variance:800},
{id:'hire',name:'Hire an Operator',category:'OPERATIONS',description:'Build a stronger management team.',lesson:'A company that runs without its founder can be worth more to a buyer.',cost:9000,skill:2,risk:-8,gain:18500,variance:7000},
{id:'expand',name:'Expand to a New Market',category:'GROWTH',description:'Scale your proven operations into another market.',lesson:'Scale strong unit economics; scaling weak economics compounds losses.',cost:18000,skill:1,risk:15,gain:41000,variance:24000},
{id:'optimize',name:'Improve Operations',category:'OPERATIONS',description:'Reduce waste, improve margin and strengthen systems.',lesson:'Improving earnings can lift business valuation even without higher revenue.',cost:3400,skill:2,risk:-6,gain:14500,variance:4000},
{id:'partner',name:'Create a Partnership',category:'DEALMAKING',description:'Share distribution, talent and resources.',lesson:'A good partnership aligns incentives, control and long-term value creation.',cost:4000,skill:2,risk:-3,gain:17500,variance:9000},
{id:'research',name:'Study the Market',category:'RESEARCH',description:'Analyze competitors, pricing and market size.',lesson:'Market research should guide a decision—not become a substitute for action.',cost:1500,skill:2,risk:-5,gain:3500,variance:1600},
{id:'marketing',name:'Build a Brand',category:'MARKETING',description:'Make your offering recognizable and compelling.',lesson:'A brand is an economic asset only if it strengthens customer preference.',cost:6500,skill:1,risk:5,gain:16000,variance:11000},
{id:'contract',name:'Win a Large Contract',category:'REVENUE',description:'Pursue a major customer or business account.',lesson:'Large customers can grow cash flow—but concentration introduces risk.',cost:8000,skill:1,risk:11,gain:29500,variance:21000},
{id:'risk',name:'Make a Big Bet',category:'HIGH RISK',description:'Go all-in on a high-upside opportunity.',lesson:'Expected return means little if a loss can bankrupt the company.',cost:22000,skill:0,risk:24,gain:54000,variance:49000},
{id:'raise',name:'Raise Equity Funding',category:'FINANCE',description:'Exchange 15% ownership for $30,000 of cash.',lesson:'Funding provides runway but dilutes your percentage of future business value.',cost:0,skill:1,risk:-3,gain:0,variance:0,special:'raise',paths:['startup','acquisition','franchise','innovation','corporate','social','partner','investor']},
{id:'venturedebt',name:'Secure Venture Debt',category:'FINANCE',description:'Borrow $30,000 without selling founder equity. Debt accrues 5% interest each turn.',lesson:'Non-dilutive financing protects ownership, but debt service reduces cash flow and net worth.',cost:0,skill:1,risk:0,gain:0,variance:0,paths:['unicorn'],special:'venturedebt'},
{id:'repay',name:'Repay Debt',category:'FINANCE',description:'Use up to $15,000 cash to reduce business debt.',lesson:'Paying principal lowers cash and liabilities by the same amount, so net worth does not immediately rise.',cost:0,skill:1,risk:-10,gain:0,variance:0,special:'repay'},
{id:'sell',name:'Sell a Minority Stake',category:'EXIT',description:'Sell 20% of your current stake for liquidity.',lesson:'An exit turns some business value into cash and reduces your future participation.',cost:0,skill:1,risk:-8,gain:0,variance:0,special:'sell'},
{id:'pivot',name:'Pivot Strategy',category:'STRATEGY',description:'Stop a weak approach and reposition for growth.',lesson:'Pivoting is useful when new evidence undermines original assumptions.',cost:2600,skill:2,risk:-9,gain:8500,variance:5500,special:'pivot'},
{id:'sidecash',name:'Consulting Project',category:'CASH FLOW',description:'Earn money from a client project.',lesson:'Cash generation creates optionality and reduces dependence on outside capital.',cost:0,skill:1,risk:-1,gain:0,variance:0,special:'cash'}
];
export const events:Event[]=[
{name:'Strong Economy',description:'Customers are spending confidently.',cash:2400,value:5800,risk:-2},
{name:'Competitor Enters',description:'A well-funded rival challenges your market.',cash:-2300,value:-6200,risk:5},
{name:'Recession',description:'Demand softens and financing becomes harder.',cash:-4700,value:-10000,risk:9},
{name:'Viral Referral',description:'Customers recommend your product.',cash:4500,value:7500,risk:-1},
{name:'Supply Shock',description:'Input costs spike unexpectedly.',cash:-4200,value:-3400,risk:5},
{name:'Community Support',description:'Local partners open a new channel.',cash:2500,value:5500,risk:-3},
{name:'Key Employee Leaves',description:'A talented operator departs.',cash:-2200,value:-4800,risk:6},
{name:'Unexpected Demand',description:'A new customer segment starts buying.',cash:3600,value:8200,risk:2}
];
export function randomSeed(){return Math.floor(Math.random()*2147483646)+1}
export function stepRandom(seed:number):[number,number]{const next=(seed*48271)%2147483647;return [next,next/2147483647]}
function nextInt(g:Game,n:number){const [seed,value]=stepRandom(g.seed);g.seed=seed;return Math.floor(value*n)}
function nextUnit(g:Game){const [seed,value]=stepRandom(g.seed);g.seed=seed;return value}
export function netWorth(g:Pick<Game,'cash'|'value'|'ownership'|'debt'>){return Math.round(g.cash+g.value*g.ownership-g.debt)}
export function fmt(n:number){return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(Math.round(n))}
// Career-specific economics: visible in card previews and used by the engine.
export function effectiveCost(g:Game,c:Card){return Math.round(c.cost*(g.path.id==='franchise'&&(c.id==='franchise'||c.id==='expand')?.8:1))}
export function careerGainMultiplier(g:Game,c:Card){
switch(g.path.id){
case 'startup':return ['launch','sales','marketing'].includes(c.id)?1.2:1;
case 'acquisition':return c.id==='buy'?1.15:1;
case 'innovation':return c.id==='invent'?1.3:1;
case 'franchise':return c.id==='invent'?.85:1;
case 'social':return c.id==='expand'?.85:1;
case 'partner':return ['optimize','hire','partner'].includes(c.id)?1.25:1;
case 'investor':return ['buy','risk'].includes(c.id)?1.15:1;
default:return 1;
}}
export function expectedAssetGain(g:Game,c:Card){return Math.round(c.gain*(1+Math.min(2.3,g.skill*.023))*careerGainMultiplier(g,c)*(g.path.id==='unicorn'?3:1))}
export function draw(g:Game){const deck=cards.filter(c=>!c.paths||c.paths.includes(g.path.id));const pool=[...deck];const picked:string[]=[];while(picked.length<4&&pool.length){picked.push(pool.splice(nextInt(g,pool.length),1)[0].id)}g.hand=picked;
// Guarantee at least one actually playable decision, even when cash or equity is constrained.
if(!g.hand.some(id=>canPlay(g,cards.find(c=>c.id===id)!))){g.hand[0]='sidecash'}
}
export function newGame(player:string,seed=randomSeed()):Game{const [next,r]=stepRandom(seed);const path=paths[Math.floor(r*paths.length)];const g:Game={id:crypto.randomUUID(),player:player.trim().slice(0,28)||'Entrepreneur',path,turn:1,cash:path.cash,value:path.value,debt:path.debt,ownership:path.ownership,skill:path.skill,risk:path.risk,hand:[],history:[],status:'playing',seed:next,round:0};draw(g);return g}
export function canPlay(g:Game,c:Card){if(g.status!=='playing'||!g.hand.includes(c.id))return false;if(c.special==='venturedebt')return g.path.id==='unicorn';if(c.special==='raise')return g.ownership>.35&&(g.path.id!=='unicorn'||g.ownership-.15>=.15);if(c.special==='repay')return g.debt>0&&g.cash>0;if(c.special==='sell')return g.value>0&&g.ownership>.1&&(g.path.id!=='unicorn'||g.ownership-.2>=.15);return g.cash>=effectiveCost(g,c)}
export function playCard(game:Game,cardId:string):{game:Game;result:HistoryItem}{const g:Game=structuredClone(game),c=cards.find(x=>x.id===cardId);if(!c||!canPlay(g,c))throw Error('Card not playable');const before=netWorth(g);let message='';if(c.special==='raise'){g.ownership=Math.max(g.path.id==='unicorn'?.15:.1,g.ownership-.15);g.cash+=30000;message='Raised $30,000; gave up 15 percentage points of ownership.'}
else if(c.special==='venturedebt'){g.cash+=30000;g.debt+=30000;message='Secured $30,000 venture debt without equity dilution; interest accrues at 5% per turn.'}
else if(c.special==='repay'){const sum=Math.min(15000,g.debt,g.cash);g.cash-=sum;g.debt-=sum;message=`Repaid ${fmt(sum)} in principal.`}
else if(c.special==='sell'){const portion=Math.min(.2,g.ownership);const payout=g.value*portion*.9;g.cash+=payout;g.ownership=Math.max(g.path.id==='unicorn'?.15:0,g.ownership-portion);message=`Sold 20 percentage points of business equity at a 10% discount; received ${fmt(payout)}.`}
else if(c.special==='cash'){const amount=4500+nextInt(g,7500);g.cash+=amount;message=`Collected ${fmt(amount)} in consulting revenue.`}
else{g.cash-=effectiveCost(g,c);const volatility=(nextUnit(g)*2-1)*c.variance;let appreciation=Math.max(0,c.gain*(1+Math.min(2.3,g.skill*.023))*careerGainMultiplier(g,c)+volatility);if(nextUnit(g)<g.risk/230){appreciation*=.27;message='Execution setback. '}if(g.path.id==='unicorn')appreciation*=3;g.value+=appreciation;g.debt+=c.debt||0;message+=`Business asset value changed by ${fmt(appreciation)}.`}
if(g.path.id==='social'&&c.id==='partner'){g.cash+=3000;message+=' Community grant: $3,000.'}g.skill=Math.min(100,g.skill+c.skill);g.risk=g.path.id==='unicorn'?0:Math.max(0,Math.min(100,g.risk+c.risk));
let eventName='';if(g.turn%2===0){const event=events[nextInt(g,events.length)];const downturn=g.path.id==='investor'&&event.cash<0?1.25:1;g.cash+=Math.round(event.cash*downturn);g.value=Math.max(0,g.value+Math.round(event.value*(event.value<0?downturn:1)));g.risk=g.path.id==='unicorn'?0:Math.max(0,Math.min(100,g.risk+event.risk));eventName=`${event.name}: ${event.description} Cash ${fmt(event.cash)}, assets ${fmt(event.value)}.`}
if(g.path.id==='corporate'){g.cash+=2000;message+=' Corporate income: $2,000.'}const interest=Math.round(g.debt*.05);g.cash-=interest;if(interest)message+=` Debt interest: ${fmt(interest)}.`;
if(g.cash<0){const shortfall=-g.cash;g.debt+=shortfall;g.cash=0;g.risk=g.path.id==='unicorn'?0:Math.min(100,g.risk+8);message+=` Emergency borrowing: ${fmt(shortfall)}.`}
const result:HistoryItem={turn:g.turn,card:c.name,message,delta:netWorth(g)-before,event:eventName||undefined,lesson:c.lesson};g.history.unshift(result);if(g.turn>=MAX_TURNS){g.status='finished';g.hand=[]}else{g.turn++;draw(g)}g.round++;return {game:g,result}}
export function scoreFromGame(g:Game):Score{return{id:g.id,name:g.player,path:g.path.name,netWorth:netWorth(g),cash:Math.round(g.cash),value:Math.round(g.value),debt:Math.round(g.debt),ownership:g.ownership,date:new Date().toISOString()}}
