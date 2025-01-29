import { AppDataSource } from '../data-source';
import { Cars_listings } from '../entity/Cars_listings';

export async function deleteOldListings(): Promise<void> {
    const listingRepository = AppDataSource.getRepository(Cars_listings);

    try {
        await listingRepository.createQueryBuilder()
        .delete()
        .from(Cars_listings)
        .where("created_at < :date", { date: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) })
        .execute();
        console.log('Anúncios antigos deletados com sucesso.');
    } catch (error) {
        console.error('Erro ao deletar anúncios antigos:', error);
    }
}