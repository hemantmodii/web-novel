import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

   await prisma.chapters.create({
      data: {
        name: `The Black House`,
        content: `It is very common to notice something that is not supposed to be there. But that was not the case with Mr. Sharma's garden of black roses. They blend with the even darker house as if a part of the gloomy side of the city of Raipur. No one from outside can imagine what kind of a place it is. The yellow drainage pipes are a hint of the place's ancient beauty but years of mildew have made the place look like a black hole. No one seems to care for the facade of once an astonishingly beautiful house. In autumn, when the yellowed leaves of neighbouring trees fall, alongside the yellow mildew of the walls. It feels as if the building is trying to reclaim its once marvelous beauty. But the dust and dried branches don't let it happen.
  
           Trespassers often try to take long strides when crossing this very spot. But the place is a haven for those around. In evenings when  the sky is a dark shade of orange, a group of children can be seen playing in the garden. Rishi is the youngest of them all and even the most notorious. Not a single day passes when he doesn't pluck a black rose from the garden. This was his 98th rose. And it is yet to be known what he is going to do with all these roses.
  
           Adi shouted from afar, "Rishi, It's getting late, we should head back to the city now."
           
           Rishi looked at Adi, "I don't know, maybe I should stay here for a bit longer."
           
           Adi smiled and said, "I'm sure you are upto some mischief."
  
           Everyone else had left, including Rishi's elder brother Ayaan. Adi came towards Rishi to take him back with him.
           
           Rishi said, "I don't want to go back. I want to explore the place."
  
           Adi exclaimed, "What do you mean? We have been playing here since months now. What's more to explore?"
  
           As soon as Adi grabbed Rishi's hand, a sharp pain ran through his fingers to his elbow. Rishi had pricked him with the rose thorn.
  
           "Ouch!" Adi said.
  
           Rishi started laughing, and went back to wanering around the garden.
  
           "Something is off", Adi thought to himself and headed towards the road which led to the main city.`,
      },
    });
}

main()
  .then(() => {
    console.log('Seeding completed.');
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
