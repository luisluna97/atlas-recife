import { DatabaseSync } from 'node:sqlite';
const db=new DatabaseSync('tmp/miss0005-audit/atlas-miss0005-v0.sqlite',{readOnly:true});
if(process.argv[2]==='tables') console.log(db.prepare("select name from sqlite_master where type='table' order by name").all().map(x=>x.name).join('\n'));
else {
 const table=process.argv[2];
 if(!/^[a-z_]+$/.test(table))throw new Error('invalid table');
 console.log(JSON.stringify(db.prepare(`select * from ${table} limit 100`).all(),null,2));
}
