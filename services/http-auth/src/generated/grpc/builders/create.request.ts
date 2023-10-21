import {BoolValue, StringValue} from "google-protobuf/google/protobuf/wrappers_pb";
import {CreateRequest} from "../typescript/threads_pb";

export default class CreateRequestBuilder {
   private readonly message: CreateRequest;

   constructor() {
      this.message = new CreateRequest();
   }

   withName(name: string): this {
      this.message.setName(new StringValue().setValue(name));
      return this;
   }

   withDescription(description: string): this {
      this.message.setDescription(new StringValue().setValue(description));
      return this;
   }

   withContent(content: string): this {
      this.message.setContent(new StringValue().setValue(content));
      return this;
   }

   withOwner(owner: string): this {
      this.message.setOwner(new StringValue().setValue(owner));
      return this;
   }

   withImages(images: string[]): this {
      this.message.setImagesList(images.map((image) => new StringValue().setValue(image)));
      return this;
   }

   withTags(tags: string[]): this {
      this.message.setTagsList(tags.map((tag) => new StringValue().setValue(tag)));
      return this;
   }

   withIsPromoted(isPromoted: boolean): this {
      this.message.setIspromoted(new BoolValue().setValue(isPromoted));
      return this;
   }

   withAuth(auth: string): this {
      this.message.setAuth(new StringValue().setValue(auth));
      return this;
   }

   build(): CreateRequest {
      return this.message;
   }
}