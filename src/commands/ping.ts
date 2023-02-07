import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '#lib/structures';
import type { ChatInputCommandInteraction } from 'discord.js';
import type { CommandOptions } from '#lib/interfaces';
import type { ApplicationCommandRegistry } from '@sapphire/framework';

@ApplyOptions<CommandOptions>({
	description: 'ping pong'
})
export class UserCommand extends Command {
	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand({
			name: this.name,
			description: this.description
		});
	}

	public async chatInputRun(interaction: ChatInputCommandInteraction) {
		const pingMessage = await interaction.reply({ content: 'Ping?', fetchReply: true });

		const content = `Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
			pingMessage.createdTimestamp - interaction.createdTimestamp
		}ms.`;

		await interaction.editReply({
			content
		});
	}
}
