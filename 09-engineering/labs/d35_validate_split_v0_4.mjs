import fs from 'node:fs';
const x=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
const dev=new Set(x.development), hold=new Set(x.holdout);
const errors=[];
if(dev.size!==x.development.length)errors.push('duplicate in development');
if(hold.size!==x.holdout.length)errors.push('duplicate in holdout');
for(const id of dev)if(hold.has(id))errors.push(`overlap: ${id}`);
if(dev.size!==4)errors.push(`development size ${dev.size}, expected 4`);
if(hold.size!==4)errors.push(`holdout size ${hold.size}, expected 4`);
const segment=s=>s.includes('ACCOUNT')?'account':'legal';
for(const [name,set] of [['development',dev],['holdout',hold]]){
 const counts={account:0,legal:0}; for(const id of set)counts[segment(id)]++;
 if(counts.account!==2||counts.legal!==2)errors.push(`${name} not segment-balanced: ${JSON.stringify(counts)}`);
}
console.log(JSON.stringify({valid:errors.length===0,errors},null,2));
if(errors.length)process.exit(1);
