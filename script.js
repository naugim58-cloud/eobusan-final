const photo={
 '멸치':'https://ecimg.cafe24img.com/pg298b50889312068/withtaste/web/product/extra/big/20230406/84b43dea366f887c14955c49d111830d.jpg',
 '붕장어':'https://commons.wikimedia.org/wiki/Special:FilePath/Conger%20myriaster.jpg?width=800',
 '먹장어':'https://commons.wikimedia.org/wiki/Special:FilePath/Eptatretus%20burgeri.jpg?width=800',
 '오징어':'https://commons.wikimedia.org/wiki/Special:FilePath/Todarodes%20pacificus.jpg?width=800',
 '도다리':'https://commons.wikimedia.org/wiki/Special:FilePath/Paralichthys%20olivaceus.jpg?width=800',
 '가자미':'https://commons.wikimedia.org/wiki/Special:FilePath/Paralichthys%20olivaceus.jpg?width=800',
 '볼락':'https://commons.wikimedia.org/wiki/Special:FilePath/Sebastes%20schlegelii.jpg?width=800',
 '전갱이':'https://commons.wikimedia.org/wiki/Special:FilePath/Trachurus%20japonicus%20for%20sale%20in%20Tokyo%20area%20-%20Oct%207%202019.jpeg?width=800',
 '고등어':'https://m.luckyfull.com/web/product/big/201806/104_shop1_15293914933265.jpg',
 '갈치':'https://ojsfile.ohmynews.com/STD_IMG_FILE/2012/1024/IE001505500_STD.jpg',
 '숭어':'https://commons.wikimedia.org/wiki/Special:FilePath/Mugil%20cephalus.jpg?width=800',
 '전어':'https://commons.wikimedia.org/wiki/Special:FilePath/Konosirus%20punctatus.jpg?width=800',
 '농어':'https://commons.wikimedia.org/wiki/Special:FilePath/Lateolabrax%20japonicus.jpg?width=800'
};
const regionPhoto={
 '기장-멸치':'https://www.nifs.go.kr/cmmn/images/81myal_watermark.jpg',
 '기장-붕장어':'assets/fish/conger-nifs.jpg',
 '기장-먹장어':'https://cdn.hdhy.co.kr/news/photo/201506/3409_3673_549.jpg',
 '기장-오징어':'https://commons.wikimedia.org/wiki/Special:FilePath/Todarodes%20pacificus%20(white%20background).jpg?width=1600',
 '송정-도다리':'https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fnews%2F202003%2F05%2Fmoneytoday%2F20200305092452146voxj.jpg',
 '송정-가자미':'https://static.educalingo.com/img/ko/800/gajami.jpg',
 '송정-볼락':'https://species.nibr.go.kr/UPLOAD/digital/GWPFile_per_BoardNo/9997/20181024012455476162.jpg',
 '송정-전갱이':'assets/fish/horse-mackerel-nifs.jpg',
 '영도-고등어':'https://thumbnews.nateimg.co.kr/view610/news.nateimg.co.kr/orgImg/hn/2023/01/22/20230122500501.jpg',
 '영도-전갱이':'assets/fish/horse-mackerel-nifs.jpg',
 '영도-갈치':'assets/fish/galchi-nifs.jpg',
 '영도-볼락':'https://blog.kakaocdn.net/dna/bwGSMX/btqFePrIc01/AAAAAAAAAAAAAAAAAAAAAIrGuNTuNlsUPLx_TNZdBRhr4KOJm9Uu9tNJoZ9CqxSn/img.jpg?allow_ip=&allow_referer=&credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1769871599&signature=JQn05VP0AwPzLZnoaVK12wakUws%3D',
 '다대포-숭어':'https://thumbnews.nateimg.co.kr/view610/onimg.nate.com/orgImg/hi/2018/04/16/323887e8f0894e3da1fbc9a84d6f9427.jpg',
 '다대포-전어':'https://minio.nculture.org/amsweb-opt/multimedia_assets/242/97608/112851/c/%EC%A0%84%EC%96%B4_%EC%A0%84%EC%96%B4-%289%29_%EA%B0%95%EC%9B%90%EB%8F%84%EC%B2%AD_%EC%A0%9C1%EC%9C%A0%ED%98%95-medium-size.jpg',
 '다대포-농어':'assets/fish/seabass-nifs.jpg',
 '다대포-도다리':'https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fnews%2F202003%2F05%2Fmoneytoday%2F20200305092452146voxj.jpg'
};
const seed=[
 ['기장','멸치',[3,4,5,6],9000,22,'멸치회 · 찌개 · 구이'],['기장','붕장어',[1,2,3,4,5,6,7,8,9,10,11,12],21000,18,'소금구이 · 장어탕 · 회'],['기장','먹장어',[6,7,8,9],18000,16,'소금구이 · 양념구이 · 매운탕'],['기장','오징어',[6,7,8,9,10,11],15000,20,'회 · 버터구이 · 물회'],
 ['송정','도다리',[2,3,4],19000,13,'쑥국 · 회 · 구이'],['송정','가자미',[10,11,12,1,2,3],16000,12,'구이 · 찜 · 조림'],['송정','볼락',[12,1,2,3,4],22000,9,'매운탕 · 구이 · 조림'],['송정','전갱이',[6,7,8,9,10],12000,23,'소금구이 · 회 · 조림'],
 ['영도','고등어',[9,10,11],14000,17,'고등어구이 · 조림 · 회'],['영도','전갱이',[6,7,8,9,10],12000,15,'소금구이 · 회 · 조림'],['영도','갈치',[8,9,10,11],26000,11,'갈치구이 · 조림 · 구이'],['영도','볼락',[12,1,2,3,4],22000,8,'매운탕 · 구이 · 조림'],
 ['다대포','숭어',[10,11,12,1,2],16000,19,'숭어회 · 매운탕 · 구이'],['다대포','전어',[8,9,10],15000,25,'전어회 · 구이 · 무침'],['다대포','농어',[5,6,7,8,9,10],28000,7,'농어회 · 소금구이 · 맑은탕'],['다대포','도다리',[2,3,4],19000,10,'쑥국 · 회 · 구이']
];
const fish=seed.map(([area,name,months,price,qty,recipes],i)=>({area,name,months,price:Math.round(price/2),qty,recipes,emoji:['🐟','🐠','🦑'][i%3],time:`0${6+i%3}:2${i%6}`,image:regionPhoto[`${area}-${name}`]||photo[name],phone:'010-2458-7721'}));
let selectedMonth=new Date().getMonth()+1,rescued=0,found=[],dailyDraws=0;
const $=s=>document.querySelector(s),available=()=>fish.filter(f=>f.months.includes(selectedMonth));
function go(id){document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===id));document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('active',x.dataset.page===id));window.scrollTo({top:0,behavior:'smooth'});if(id==='rescue')renderRescue();if(id==='my')renderMy();if(id==='draw')resetDraw();if(id==='map')setTimeout(initBusanMap,80)}
function startDraw(){go('draw');setTimeout(drawFish,120)}
function setMonth(month){selectedMonth=Number(month);render();toast(`${selectedMonth}월 어획 분석 결과로 바뀌었어요.`)}
function image(f,cls=''){return `<img class="${cls}" src="${f.image}" alt="${f.area} ${f.name}" onerror="this.style.display='none';this.parentElement.classList.add('image-fallback')">`}
function renderDrawLimit(){const label=$('#draw-count');if(label)label.textContent=`🎣 오늘 2회 가능 · 남은 뽑기 ${Math.max(0,2-dailyDraws)}회`}
function resetDraw(){$('#draw-card').innerHTML='<div class="draw-wave">🌊</div><div class="mystery">?</div><p>버튼을 눌러 오늘의 수산물을 만나보세요</p>';renderDrawLimit()}
function weightedPick(){const current=available(),pool=current.flatMap(f=>Array(Math.max(1,f.qty)).fill(f));return pool[Math.floor(Math.random()*pool.length)]}
function drawFish(){if(dailyDraws>=2)return toast('오늘의 바다뽑기 2회를 모두 사용했어요. 내일 다시 만나요!');if(!available().length){toast('오늘 어획 가능 어종이 없어요.');return}dailyDraws++;renderDrawLimit();const card=$('#draw-card');card.innerHTML='<div class="mystery">🎣</div><p>부산 바다에서 수산물을 찾는 중...</p>';setTimeout(()=>{const f=weightedPick();card.innerHTML=`<div class="draw-result">${image(f,'result-photo')}<div class="discount">오늘의 바다뽑기 · 5% 할인</div><h2>🎉 ${f.area} ${f.name} 당첨!</h2><p>📍 ${f.area} 앞바다 · 오늘 ${f.time} 어획<br>남은 수량 ${f.qty}마리</p><button class="primary" onclick="openFish(${fish.indexOf(f)},true)">5% 할인 받고 데려가기</button></div>`},600)}
function openFish(i,drawDiscount=false){const f=fish[i],amount=drawDiscount?Math.round(f.price*.95):f.price;$('#modal-content').innerHTML=`<div class="draw-result">${image(f,'result-photo')}<h2>${f.area} ${f.name}</h2><p>📍 ${f.area} 앞바다 · 오늘 어획 가능<br>남은 수량 <b>${f.qty}마리</b><br><br>추천 메뉴: ${f.recipes}</p><b class="discount">${drawDiscount?'바다뽑기 5% 할인 · ':'특가 · '}${amount.toLocaleString()}원</b><select id="cut"><option>통째로</option><option>내장 제거</option><option>구이용 손질</option><option>회용 손질</option></select><button class="primary" onclick="reserve(${i},${amount})">예약하기</button></div>`;$('#modal').classList.remove('hidden')}
function closeModal(){$('#modal').classList.add('hidden')}
function reserve(i,amount){const f=fish[i];if(!f.qty)return toast('준비된 수량이 모두 예약되었어요.');$('#modal-content').innerHTML=`<div class="draw-result"><div class="big">📍</div><h2>판매자와 픽업 확인</h2><p><b>${f.area} ${f.name}</b> 예약 전, 판매자와 수령 정보를 확인해주세요.</p><div class="pickup-card"><b>📍 픽업 위치</b>${f.area} 수산물 직거래장<br>오늘 16:00 ~ 19:00 수령 가능<br><br><b>👨‍🌾 판매자 연락</b>바다어부 ${f.phone||'010-2458-7721'}<div class="contact-actions"><a href="tel:${f.phone||'01024587721'}">📞 전화하기</a><a href="sms:${f.phone||'01024587721'}">💬 문자 보내기</a></div></div><button class="primary" onclick="showPayment(${i},${amount})">픽업 확인 후 결제하기</button></div>`}
function showPayment(i,amount){const f=fish[i];$('#modal-content').innerHTML=`<div class="draw-result"><div class="big">💳</div><h2>가상 결제</h2><p><b>${f.area} ${f.name}</b><br>결제 금액 <b>${amount.toLocaleString()}원</b></p><label class="payment-option"><input type="radio" name="pay" checked><span><b>카카오페이</b><small>테스트 결제 · 실제 청구되지 않아요</small></span></label><label class="payment-option"><input type="radio" name="pay"><span><b>신용·체크카드</b><small>테스트 결제 · 실제 청구되지 않아요</small></span></label><label class="payment-option"><input type="radio" name="pay"><span><b>계좌이체</b><small>테스트 결제 · 실제 청구되지 않아요</small></span></label><button class="primary" onclick="completePayment(${i})">${amount.toLocaleString()}원 결제하기</button></div>`}
function completePayment(i){const f=fish[i];f.qty--;rescued++;if(!found.includes(f.area+f.name))found.push(f.area+f.name);render();$('#modal-content').innerHTML=`<div class="draw-result"><div class="big">🎉</div><h2>결제가 완료됐어요!</h2><p><b>${f.area} ${f.name}</b> 구조에 참여해주셔서 감사합니다.<br>픽업 시간에 수산물 직거래장으로 방문해주세요.</p><button class="primary" onclick="closeModal()">확인</button></div>`}
function renderRescue(){$('#rescue-list').innerHTML=[...available()].sort((a,b)=>b.qty-a.qty).map(f=>`<article class="rescue"><div class="rescue-head"><b>${f.emoji} ${f.area} ${f.name}</b><strong>${f.qty}마리 남음</strong></div><p>${selectedMonth}월 ${f.area} 앞바다 어획 가능 어종이에요.</p><div class="progress"><i style="width:${Math.min(100,(1-f.qty/31)*100)}%"></i></div><button onclick="openFish(${fish.indexOf(f)})">${f.name} 구조하러 가기</button></article>`).join('')||'<p class="empty">이번 달 구조 요청이 없어요.</p>'}
function renderMy(){const level=Math.max(1,Math.floor(rescued/3)+1),rewards=[[10,'🌊','바다 플로팅 키링'],[25,'🎟️','다음 픽업 10% 쿠폰'],[50,'🧊','보냉백 굿즈'],[100,'👑','바다 수호자 한정 배지']];$('#rescued-count').textContent=rescued;$('#found-count').textContent=found.length;$('#level').textContent=level;$('#level-copy').textContent=`구조 ${rescued}회 · 다음 등급까지 ${Math.max(0,level*3-rescued)}회 남았어요.`;$('#reward-list').innerHTML=rewards.map(([count,icon,title])=>`<div class="reward-row ${rescued>=count?'unlocked':''}"><i>${icon}</i><span><b>${count}회 구조 · ${title}</b><small>${rescued>=count?'획득 완료!':'앞으로 '+Math.max(0,count-rescued)+'회 더 구조해요'}</small></span></div>`).join('');$('#collection').innerHTML=fish.map(f=>`<div class="${found.includes(f.area+f.name)?'found':''}">${f.emoji}<small>${found.includes(f.area+f.name)?f.name:'미발견'}</small></div>`).join('')}
function filterArea(area){const choices=available().filter(f=>f.area===area);$('#area-result').innerHTML=`<b>📍 ${area} 앞바다 · ${selectedMonth}월 분석</b><br>${choices.map(f=>`${f.emoji} ${f.name} · ${f.qty}마리 남음`).join('<br>')||`${selectedMonth}월에는 등록된 제철 어종이 없어요.`}`}
$('#seller-form').addEventListener('submit',e=>{e.preventDefault();const name=$('#new-name').value.trim(),area=$('#new-area').value,qty=Number($('#new-qty').value),upload=$('#new-photo').files[0],imageUrl=upload?URL.createObjectURL(upload):(photo[name]||'');fish.unshift({name,area,time:$('#new-time').value,price:Number($('#new-price').value),qty,emoji:'🐟',recipes:'구이 · 회 · 조림',image:imageUrl,phone:$('#seller-phone').value.trim()||'010-2458-7721',months:[selectedMonth]});e.target.reset();go('home');render();toast(`${name} ${qty}마리가 ${selectedMonth}월 오늘의 바다에 등록됐어요!`)});
function render(){
 const current=available(),total=current.reduce((a,f)=>a+f.qty,0),areas=['기장','송정','영도','다대포'];
 $('#total-count').textContent=total;
 $('#season-insight').innerHTML=`오늘 입고된 부산 4개 권역의 <b>${current.length}종</b> 수산물을 만나보세요.`;
 const urgent=[...current].sort((a,b)=>b.qty-a.qty)[0];
 $('#urgent-card').innerHTML=urgent?`<div class="urgent-top"><span>🚨 바다 구조 요청!</span><span>${urgent.qty}마리 남음</span></div><b>${urgent.area} ${urgent.name}</b><p>이번 달 어획 가능한 수산물이에요.<br>오늘 안에 ${Math.max(0,urgent.qty-8)}마리가 더 팔리면 구조 성공!</p><div class="progress"><i style="width:${Math.min(100,(1-urgent.qty/31)*100)}%"></i></div><small>구조 진행 중</small>`:'<b>이번 달에는 등록된 어종이 없어요.</b>';
 $('#fish-list').innerHTML=areas.map(area=>{const items=current.filter(f=>f.area===area);return `<section class="region-block"><div class="region-head"><h3>📍 ${area} 앞바다</h3><small>${items.length} / 4종 어획 가능</small></div><div class="region-fish-grid">${items.map(f=>`<article class="fish" onclick="openFish(${fish.indexOf(f)})"><div class="fish-photo">${image(f)}</div><b>${f.name}</b><small>${f.time} 어획 · ${f.qty}마리</small><strong>${f.price.toLocaleString()}원</strong><em>● ${selectedMonth}월 제철</em></article>`).join('')||'<p class="empty">이번 달 어획 가능 어종이 없어요.</p>'}</div></section>`}).join('');
}
let busanMap;
function initBusanMap(){if(!window.L)return;if(busanMap){busanMap.invalidateSize();return}busanMap=L.map('busan-real-map',{zoomControl:false,scrollWheelZoom:false}).setView([35.155,129.103],10);L.control.zoom({position:'bottomright'}).addTo(busanMap);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'© OpenStreetMap contributors'}).addTo(busanMap);const points={기장:[35.244,129.215,'기장 대변항'],송정:[35.180,129.203,'송정해수욕장'],영도:[35.083,129.070,'영도 남항'],다대포:[35.048,128.966,'다대포항']};Object.entries(points).forEach(([area,[lat,lng,label]])=>{const marker=L.circleMarker([lat,lng],{radius:9,color:'#fff',weight:3,fillColor:'#ef6755',fillOpacity:1}).addTo(busanMap);marker.bindTooltip(`${area} 어획 포인트`,{direction:'top',offset:[0,-10]});marker.on('click',()=>{filterArea(area);const items=available().filter(f=>f.area===area);marker.bindPopup(`<b>📍 ${label}</b><br>${items.map(f=>`${f.emoji} ${f.name} · ${f.qty}마리`).join('<br>')||'오늘 등록된 수산물이 없어요.'}`).openPopup()})})}
render();renderMy();
