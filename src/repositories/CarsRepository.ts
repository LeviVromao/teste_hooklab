import { AppDataSource } from "../data-source";
import { Cars } from "../entity/Cars";

const carRepository = AppDataSource.getRepository(Cars)

export async function findCarById(userId: number): Promise<Cars[]>{
    try {
        const cars = await carRepository.createQueryBuilder('car')
        .innerJoinAndSelect('car.user', 'user')
        .innerJoinAndSelect('listing', 'listing', 'listing.car_id = car.id')
        .where('user.id = :userId', { userId })
        .select([
            'car.model',
            'listing.listing_price',
            'car.year',
            'car.color',
            'user.id',
            'user.name'
        ])
        .getMany()
        return cars
    } catch (error) {
        console.log("Erro ao buscar o carro ", error)
        return []
    }
}

export async function insertNewCar() {
    try {
        const newCar = carRepository.create({
            model: 'Fiat Uno',
            year: new Date('2010-01-01'),
            color: 'White'
        });
    
        await carRepository.save(newCar);
        console.log('Novo carro inserido com sucesso:', newCar);
        return newCar
    } catch (error) {
        console.log("Nao foi possivel criar um novo carro", error)
        return
    }
}