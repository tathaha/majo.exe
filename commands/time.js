const moment = require("moment");

module.exports.run = async (client, message, args) => 
	const now = new Date();
	const next = new Date(now);
	next.setFullYear(now.getFullYear() + 1);
	next.setHours(0, 0, 0, 0);
	next.setMonth(0, 1);
	const duration = next - now;
	const seconds = Math.floor((duration / 1000) % 60);
	const minutes = Math.floor((duration / 1000 / 60) % 60);
	const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
	const days = Math.floor(duration / (1000 * 60 * 60 * 24));
	return msg.send({
		embed: {
			color: 3447003,
			title: "Woo! Prepare the party poppers!",
			description: `There are **${days} days**, **${hours} hours**, **${minutes} minutes** and **${seconds} seconds** until **${next.getFullYear()}**! 🎆`,
			footer: {
				text: `Or, in short, ${moment.duration(next - now).humanize()}.`,
			},
		},
	});
};

module.exports.help = {
    name: "time",
    description: "Show a time",
    usage: "time",
    type: "Fun" 
}
