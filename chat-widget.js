(function () {
	if (window.__ChatWidgetMounted__) return;
	window.__ChatWidgetMounted__ = true;

	// 預設位置
	const defaultPosition = {
		bottom: '20px',
		right: '20px',
	};

	// 合併使用者提供的位置設定
	const userConfig = window.ChatWidgetConfig || {};
	const position = {
		...defaultPosition,
		...(userConfig.position || {}),
	};

	const widget = document.createElement('div');
	widget.id = 'chat-widget';

	widget.style.position = 'fixed';

	// 套用定位位置（支援 top/bottom/left/right）
	['top', 'bottom', 'left', 'right'].forEach((dir) => {
		if (position[dir]) {
			widget.style[dir] = position[dir];
		}
	});

	widget.style.width = '300px';
	widget.style.height = '400px';
	widget.style.zIndex = '9999';

	widget.innerHTML = `
    <iframe 
      src="./chat.html" 
      style="width: 100%; height: 100%; border: none;"
    ></iframe>
  `;

	document.body.appendChild(widget);
})();
