const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Browser,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Sprite,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.JavaScriptInEvents.EventSheet1_Event1_Act1,
		C3.JavaScriptInEvents.EventSheet1_Event2,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.JavaScriptInEvents.EventSheet1_Event3_Act1,
		C3.JavaScriptInEvents.EventSheet1_Event4,
		C3.JavaScriptInEvents.EventSheet1_Event5,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.JavaScriptInEvents.EventSheet1_Event8_Act1
	];
};
self.C3_JsPropNameTable = [
	{Browser: 0},
	{txtWalletAddress: 0},
	{Button: 0},
	{Touch: 0},
	{Mouse: 0},
	{Connect: 0},
	{txtBNB: 0},
	{txtInfinity: 0},
	{Contrato: 0},
	{walletAddress: 0},
	{walletBNB: 0},
	{walletInfinity: 0}
];

self.InstanceType = {
	Browser: class extends self.IInstance {},
	txtWalletAddress: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Connect: class extends self.ISpriteInstance {},
	txtBNB: class extends self.ITextInstance {},
	txtInfinity: class extends self.ITextInstance {},
	Contrato: class extends self.ISpriteInstance {}
}