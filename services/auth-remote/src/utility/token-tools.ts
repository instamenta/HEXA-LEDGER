import JWT, {VerifyErrors} from 'jsonwebtoken';
import DotConfig from "dot_configurator";
import {IVlog, VLogger} from "@instamenta/vlogger";

export interface IAuthTokenPayload {
   authId: string,
   username: string,
   picture: string,
   address: string
}

export default class TokenTools {
   private readonly dot: DotConfig;
   private readonly vlog: IVlog;
   private readonly secret: string;
   private readonly config: object;

   constructor(dot: DotConfig, vlogger: VLogger) {
      this.dot = dot;
      this.vlog = vlogger.getVlog(this.constructor.name);
      this.config = this.dot.GET("TOKEN_CONFIG", {expiresIn: "60 days"});
      this.secret = this.dot.GET("TOKEN_SECRET", '8Zz5tw0IonM3XPZZFN0NOml3z9FMfmpgXwovR9fp6ryDIoGRM8EPHAB6iHsc0fb');
   }

   public static getInstance({dot, vlogger}: { dot: DotConfig, vlogger: VLogger }): TokenTools {
      return new TokenTools(dot, vlogger);
   }

   public generateToken(payload: IAuthTokenPayload): Promise<string> {
      this.vlog.info({data: payload, func: 'generateToken', msg: "Generating Token"})
      return new Promise((resolve, reject) => {
         JWT.sign(payload, this.secret, this.config,
            (e: Error | null, token) =>
               e ? reject(e) : resolve(token as string));
      });
   }

   public decodeToken(token: string): Promise<string> {
      this.vlog.info({data: token, func: 'decodeToken', msg: "Decoding Token"})
      return new Promise((resolve, reject) => {
         JWT.verify(token, this.secret,
            (e: VerifyErrors | null, decoded: any) =>
               e ? reject(e) : resolve(decoded as string)
         );
      });
   }

   public verifyToken(token: string): string {
      this.vlog.info({data: token, func: 'verifyToken', msg: "Verifying Token"})
      return JWT.verify(token, this.secret) as string;
   }
}
