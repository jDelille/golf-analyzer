type ImportPost = {
  id: string;
  type: 'import';
  date: string;
  details: {
    itemName: string;
  };
};

type BadgePost = {
  id: string;
  type: 'badge';
  date: string;
  details: {
    badgeName: string;
    badgeImage: string; 
    message: string;
  };
};

type RecordPost = {
  id: string;
  type: 'record';
  date: string;
  details: {
    recordDescription: string;
    ribbonImage: string; // URL to ribbon or icon image
  };
};

export type PostData = ImportPost | BadgePost | RecordPost;