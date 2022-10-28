import OptionsSync from "webext-options-sync";

export default new OptionsSync({
	defaults: {
		subTaskIcon: "forward_",
	},
	migrations: [OptionsSync.migrations.removeUnused],
	logging: true,
});
