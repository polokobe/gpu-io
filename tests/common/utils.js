const HALF_FLOAT = 'HALF_FLOAT';
const FLOAT = 'FLOAT';
const UNSIGNED_BYTE = 'UNSIGNED_BYTE';
const BYTE = 'BYTE';
const UNSIGNED_SHORT = 'UNSIGNED_SHORT';
const SHORT = 'SHORT';
const UNSIGNED_INT = 'UNSIGNED_INT';
const INT = 'INT';
const GLSL3 = '300 es';
const GLSL1 = '100';
const LINEAR = 'LINEAR';
const NEAREST = 'NEAREST';
const REPEAT = 'REPEAT';
const CLAMP_TO_EDGE = 'CLAMP_TO_EDGE';

function showMoreInfo(e, result) {
	e.preventDefault();
	const modal = document.getElementById('modal-1-container');
	modal.className = `${result.status} modal__container`;
	document.getElementById('modal-1-title').innerHTML = result.status;
	document.getElementById('modal-1-error').innerHTML = `${result.log && result.log.length ? result.log.join('<br/><br/>') + '<br/><br/>' : ''} ${result.error.join('<br/><br/>')}`;
	document.getElementById('modal-1-config').innerHTML = Object.keys(result.config).map(key => `${key}: ${result.config[key]}`).join('<br/>');
	MicroModal.show('modal-1');
}

function makeTitleColumn(titles, title) {
	const container = document.createElement('div');
	container.className = 'column-title';
	if (title) {
		const titleDiv = document.createElement('div');
		titleDiv.className = 'entry';
		titleDiv.innerHTML = title;
		container.appendChild(titleDiv);
	}
	titles.forEach(title => {
		const titleDiv = document.createElement('div');
		titleDiv.className = 'entry';
		titleDiv.innerHTML = title;
		container.appendChild(titleDiv);
	});
	return container;
}

function makeColumn(results, extremaResults, title) {
	const container = document.createElement('div');
	container.className = 'column';
	const titleDiv = document.createElement('div');
	titleDiv.className = 'entry header';
	titleDiv.innerHTML = title;
	container.appendChild(titleDiv);
	results.forEach((result, index) => {
		// Merge in extrema result.
		const extremaResult = extremaResults[index];
		if (extremaResult.extremaError) result.error.push(...extremaResult.extremaError);
		if (extremaResult.extremaWarning) result.error.push(...extremaResult.extremaWarning);
		if (extremaResult.status === ERROR) {
			result.status = ERROR;
		} else if (extremaResult.status === WARNING && result.status !== ERROR) {
			result.status = WARNING;
		}

		const element = document.createElement('div');
		element.className = `entry result ${result.status}`;
		if (result.status === SUCCESS) {
			element.innerHTML = `&#10003;${result.error.length ? '*' : ''}`;
		} else {
			if (result.status === WARNING) {
				element.innerHTML = '!'
			} else if (result.status === ERROR) {
				element.innerHTML = 'X'
			}
		}
		const link = document.createElement('a');
		link.href = '#';
		link.onclick = (e) => showMoreInfo(e, result);
		link.appendChild(element);
		container.appendChild(link);
	});
	return container;
}

function getBrowserVersion() {
	var ua = navigator.userAgent, tem, 
	M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE ' + (tem[1] || '');
	}
	if (M[1] === 'Chrome') {
		tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
		if(tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	}
	M = M[2] ? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
	return M.join(' v');
}

function makeTable(testFunction) {
	// To make things simpler, keep DIM_X * DIMY < 256.
	const DIM_X = 30;
	const DIM_Y = 30;

	const output = document.getElementById('output');

	const types = [
		HALF_FLOAT,
		FLOAT,
		UNSIGNED_BYTE,
		BYTE,
		UNSIGNED_SHORT,
		SHORT,
		UNSIGNED_INT,
		INT,
	];
	types.forEach((TYPE) => {
		// Create place to show results.
		const div = document.createElement('div');
		output.appendChild(div);

		// Make vertical label displaying type.
		const label = document.createElement('div');
		label.className = 'label';
		const labelInner = document.createElement('div');
		labelInner.className = 'rotate bold';
		labelInner.innerHTML = TYPE;
		label.appendChild(labelInner);
		div.appendChild(label);

		// Container for table.
		const container = document.createElement('div');
		container.className = 'container';
		div.appendChild(container);

		const rowTitles = ['R', 'RG', 'RGB', 'RGBA'];
		container.appendChild(makeTitleColumn(rowTitles));

		// Loop through each glsl version.
		const glslversions = [GLSL1, GLSL3];
		glslversions.forEach(GLSL_VERSION => {

			const outerTable = document.createElement('div');
			outerTable.className="outerTable"
			container.appendChild(outerTable);
			const outerTableTitle = document.createElement('div');
			outerTableTitle.className="outerTable-title entry"
			outerTableTitle.innerHTML = `GLSL v${GLSL_VERSION === GLSL1 ? '1' : '3'}`;
			outerTable.appendChild(outerTableTitle);

			// Loop through various settings.
			const extremaResults = [];
			for (let NUM_ELEMENTS = 1; NUM_ELEMENTS <= 4; NUM_ELEMENTS++) {
				// Test array writes for type.
				extremaResults.push(testFunction({
					TYPE,
					DIM_X,
					DIM_Y,
					NUM_ELEMENTS,
					GLSL_VERSION,
					WRAP: CLAMP_TO_EDGE,
					FILTER: NEAREST,
					TEST_EXTREMA: true,
				}));
			}

			const defaultResults = [];
			for (let NUM_ELEMENTS = 1; NUM_ELEMENTS <= 4; NUM_ELEMENTS++) {
				// Test array writes for type.
				defaultResults.push(testFunction({
					TYPE,
					DIM_X,
					DIM_Y,
					NUM_ELEMENTS,
					GLSL_VERSION,
					WRAP: CLAMP_TO_EDGE,
					FILTER: NEAREST,
				}));
			}
			outerTable.appendChild(makeColumn(defaultResults, extremaResults, '<br/>default'));

			const linearResults = [];
			for (let NUM_ELEMENTS = 1; NUM_ELEMENTS <= 4; NUM_ELEMENTS++) {
				// Test array writes for type.
				linearResults.push(testFunction({
					TYPE,
					DIM_X,
					DIM_Y,
					NUM_ELEMENTS,
					GLSL_VERSION,
					WRAP: CLAMP_TO_EDGE,
					FILTER: LINEAR,
				}));
			}
			outerTable.appendChild(makeColumn(linearResults, extremaResults, 'filter<br/>LINEAR'));

			const repeatResults = [];
			for (let NUM_ELEMENTS = 1; NUM_ELEMENTS <= 4; NUM_ELEMENTS++) {
				// Test array writes for type.
				repeatResults.push(testFunction({
					TYPE,
					DIM_X,
					DIM_Y,
					NUM_ELEMENTS,
					GLSL_VERSION,
					WRAP: REPEAT,
					FILTER: NEAREST,
				}));
			}
			outerTable.appendChild(makeColumn(repeatResults, extremaResults, 'wrap<br/>REPEAT'));

			const linearRepeatResults = [];
			for (let NUM_ELEMENTS = 1; NUM_ELEMENTS <= 4; NUM_ELEMENTS++) {
				// Test array writes for type.
				linearRepeatResults.push(testFunction({
					TYPE,
					DIM_X,
					DIM_Y,
					NUM_ELEMENTS,
					GLSL_VERSION,
					WRAP: REPEAT,
					FILTER: LINEAR,
				}));
			}
			outerTable.appendChild(makeColumn(linearRepeatResults, extremaResults, '<br/>LINEAR / REPEAT'));
		});

		container.appendChild(document.createElement('br'));
	});
}

const version = document.getElementById('version');
version.innerHTML = getBrowserVersion();