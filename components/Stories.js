import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Saptak Bose",
    src: "https://firebasestorage.googleapis.com/v0/b/storage-15b1a.appspot.com/o/CleverSap%20Profile.jpg?alt=media&token=ad2b0772-c4f9-4321-8e83-ebcc2735016e",
    profile:
      "https://firebasestorage.googleapis.com/v0/b/storage-15b1a.appspot.com/o/avatar%202.jpg?alt=media&token=03488df8-2466-4e87-bfeb-75b83919d73e",
  },
  {
    name: "Kuvam Basu",
    src: "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/280754576_3085655201763934_1296679529529488100_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=8MXXkOqc6gcAX9XssK3&_nc_ht=scontent.fccu4-2.fna&oh=00_AT9AEK2jZ0JWjrBgdI8eW-v3JEdQrufSk6JzDiERjdWCDg&oe=62F4FB15",
    profile:
      "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/283152943_1707638412914238_9159803764405636707_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=RspXAd8_1LQAX_9LY8I&_nc_oc=AQnCYI287dL2DrDrmtotVYyLVCWueh_13AdrLgY0YzQ8T_anfwScdLOpP_p35qCBkA78rpgsq67hRP4vCtC_UeKk&_nc_ht=scontent.fccu4-2.fna&oh=00_AT_kABa9ZyI868--T2Tea5vRjxeZHDLvTxX27GEPM38ukw&oe=62F535AF",
  },
  {
    name: "Elon Musk",
    src: "https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
  },
  {
    name: "Jeff Bezos",
    src: "https://media.newyorker.com/photos/5c61ae25f36fcb4eed3ac64f/master/pass/Chotiner-How-Jeff-Bezos-Sees-the-Press.jpg",
    profile:
      "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://i2-prod.dailystar.co.uk/incoming/article27394202.ece/ALTERNATES/s615/0_GettyImages-961785536.jpg",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
  },
];

export default function Stories() {

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, i) => (
        <StoryCard
          key={i}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}
