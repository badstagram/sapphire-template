import { Command as SapphireCommand, PieceContext } from '@sapphire/framework';
import type { CommandInteraction } from 'discord.js';
// import type { CommandOptions } from '../interfaces';
import type { CommandOptions } from '#lib/interfaces';

export abstract class Command extends SapphireCommand {
	public constructor(ctx: PieceContext, opts: CommandOptions) {
		super(ctx, opts);
	}

	public abstract chatInputRun(interaction: CommandInteraction): Promise<void>;

	protected parseConstructorPreConditions(options: CommandOptions): void {
		this.parseConstructorPreConditionsRunIn(options);
		this.parseConstructorPreConditionsNsfw(options);
		this.parseConstructorPreConditionsRequiredClientPermissions(options);
		this.parseConstructorPreConditionsRequiredUserPermissions(options);
	}
}
