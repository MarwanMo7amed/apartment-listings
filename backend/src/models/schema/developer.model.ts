import mongoose,{Schema} from 'mongoose';
import IDeveloper from '../interface/developer.interface';

const developerSchema = new Schema<IDeveloper>({
  name: { type: String, required: true },
});

const DeveloperModel=mongoose.model('Developer', developerSchema);
export default DeveloperModel;
