import { AppDataSource } from '../data-source';
import { Users } from '../entity/Users';

export async function updateInactiveUsers(): Promise<void> {
    try {
        const userRepository = AppDataSource.getRepository(Users);

        await userRepository.createQueryBuilder()
            .update(Users)
            .set({ status: 'inactive' })
            .where("last_login < :date", { date: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000) })
            .execute();
        console.log('Status dos usuários inativos atualizado com sucesso.');
    } catch (error) {
        console.error('Erro ao atualizar status dos usuários inativos:', error);
    }
}