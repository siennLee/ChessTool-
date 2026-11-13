(() => {
  const themes = {
    furina: {label:'Furina · Biển sâu',bg:'#061722',panel:'#0d2635',accent:'#67c8e7',text:'#e3f6fb'},
    midnight: {label:'Midnight · Lam đêm',bg:'#101426',panel:'#1b2038',accent:'#9b8cff',text:'#eeeaff'},
    pearl: {label:'Pearl · Sáng ngọc',bg:'#eaf3f5',panel:'#ffffff',accent:'#1689a5',text:'#183642'},
    rose: {label:'Rose · Hồng san hô',bg:'#241522',panel:'#382236',accent:'#f18bb2',text:'#fff0f6'}
  };
  const style = document.createElement('style');
  style.textContent = Object.entries(themes).map(([id,t]) => 'html[data-cm-theme="'+id+'"] .app-shell{background:'+t.bg+'!important;color:'+t.text+'!important}html[data-cm-theme="'+id+'"] .panel-box{background:'+t.panel+'!important;color:'+t.text+'!important;border-color:'+t.accent+'55!important}html[data-cm-theme="'+id+'"] .header-title,html[data-cm-theme="'+id+'"] .panel-label,html[data-cm-theme="'+id+'"] .field-label{color:'+t.text+'!important}html[data-cm-theme="'+id+'"] .btn-accent{background:'+t.accent+'!important;color:'+(id==='pearl'?'#fff':'#071820')+'!important}html[data-cm-theme="'+id+'"] .metric-badge{color:'+t.accent+'!important}').join('');
  document.head.append(style);
  const wrap = document.createElement('section'); wrap.className = 'panel-box cm-theme-panel';
  wrap.innerHTML = '<div class="panel-header"><span class="panel-label">Giao diện</span><span class="credit-platform">THEME</span></div><div class="field-block"><label for="cm-theme-select" class="field-label">Chọn màu chủ đạo</label><select id="cm-theme-select" class="field-select">' + Object.entries(themes).map(([id,t])=>'<option value="'+id+'">'+t.label+'</option>').join('') + '</select><div class="field-hint">Áp dụng riêng cho cửa sổ extension này.</div></div>';
  const main = document.querySelector('.app-main'); if (main) main.prepend(wrap);
  const select = wrap.querySelector('select');
  chrome.storage.local.get({uiTheme:'furina'}).then(v=>{select.value=themes[v.uiTheme]?v.uiTheme:'furina';document.documentElement.dataset.cmTheme=select.value;});
  select.addEventListener('change',()=>{document.documentElement.dataset.cmTheme=select.value;chrome.storage.local.set({uiTheme:select.value});});
})();
