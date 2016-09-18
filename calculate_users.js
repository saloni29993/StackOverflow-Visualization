

<script type="text/javascript">
var dict = {};
var prev = query[0].u_id;
var prev_ts = query[0].timestamp;
var next;
var next_ts;

for(var i=0;i<query.length;i++)
{
next = query[i].u_id;
next_ts = query[i].timestamp;
if(prev ! = next && prev_ts != next_ts)
{
  dict[query[i].timestamp] += 1;
  prev = next;
  prev_ts = next_ts;
}

}

document.write(JSON.stringify(dict));

</script>