const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Anchor,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Sin,
		C3.Behaviors.jumpthru,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Behaviors.Flash,
		C3.Plugins.Mouse,
		C3.Plugins.Audio,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Plugins.Audio.Acts.Play,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Audio.Acts.PlayAtObject,
		C3.Plugins.System.Cnds.Every,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.ScriptsInEvents.FolhaDeEventos1_Event9_Act4,
		C3.Plugins.System.Cnds.CompareVar,
		C3.ScriptsInEvents.FolhaDeEventos1_Event11_Act2,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Mouse.Cnds.OnClick
	];
};
self.C3_JsPropNameTable = [
	{Âncora: 0},
	{PlanoDeFundoEmBlocos: 0},
	{Sólido: 0},
	{brick: 0},
	{brick2: 0},
	{Senóide: 0},
	{PularAtravés: 0},
	{lift: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{littleBoy: 0},
	{Thorn: 0},
	{Sprite3: 0},
	{Variável1: 0},
	{inimigo1: 0},
	{Teclado: 0},
	{coin: 0},
	{lift3: 0},
	{Sprite4: 0},
	{txtVidas: 0},
	{Texto: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{Piscar: 0},
	{GAMEOVER: 0},
	{Texto2: 0},
	{Mouse: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{score: 0},
	{Sprite5: 0},
	{Áudio: 0},
	{Sprite: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{PlanoDeFundoEmBlocos4: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Sprite14: 0},
	{Sprite2: 0},
	{FonteDeSprites: 0},
	{Sprite15: 0},
	{Sprite16: 0},
	{Sprite17: 0},
	{PlanoDeFundoEmBlocos5: 0},
	{PlanoDeFundoEmBlocos6: 0},
	{Texto3: 0},
	{Sprite18: 0},
	{Sprite19: 0},
	{Sprite21: 0},
	{storyButton: 0},
	{startButton: 0},
	{PlanoDeFundoEmBlocos7: 0},
	{menuStory: 0},
	{personStory: 0},
	{inimStory: 0},
	{Texto4: 0},
	{vidas: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	brick: class extends self.ISpriteInstance {},
	brick2: class extends self.ISpriteInstance {},
	lift: class extends self.ISpriteInstance {},
	littleBoy: class extends self.ISpriteInstance {},
	Thorn: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	inimigo1: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	coin: class extends self.ISpriteInstance {},
	lift3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	txtVidas: class extends self.ITextInstance {},
	Texto: class extends self.ITextInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	GAMEOVER: class extends self.ITextInstance {},
	Texto2: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	score: class extends self.ITextInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos4: class extends self.ITiledBackgroundInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	FonteDeSprites: class extends self.ISpriteFontInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos5: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos6: class extends self.ITiledBackgroundInstance {},
	Texto3: class extends self.ITextInstance {},
	Sprite18: class extends self.ISpriteInstance {},
	Sprite19: class extends self.ISpriteInstance {},
	Sprite21: class extends self.ISpriteInstance {},
	storyButton: class extends self.ISpriteInstance {},
	startButton: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos7: class extends self.ITiledBackgroundInstance {},
	menuStory: class extends self.ISpriteInstance {},
	personStory: class extends self.ISpriteInstance {},
	inimStory: class extends self.ISpriteInstance {},
	Texto4: class extends self.ITextInstance {}
}