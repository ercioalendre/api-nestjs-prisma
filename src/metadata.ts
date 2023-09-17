/* eslint-disable */
export default async () => {
    const t = {
        ["./modules/user/dto/create-one-user-output.dto"]: await import("./modules/user/dto/create-one-user-output.dto"),
        ["./modules/user/dto/get-many-user-output.dto"]: await import("./modules/user/dto/get-many-user-output.dto"),
        ["./modules/user/dto/get-one-user-output.dto"]: await import("./modules/user/dto/get-one-user-output.dto"),
        ["./modules/user/dto/update-one-user-output.dto"]: await import("./modules/user/dto/update-one-user-output.dto"),
        ["./modules/user/dto/delete-one-user-output.dto"]: await import("./modules/user/dto/delete-one-user-output.dto"),
        ["./modules/auth/dto/sign-in-user-output.dto"]: await import("./modules/auth/dto/sign-in-user-output.dto")
    };
    return { "@nestjs/swagger/plugin": { "models": [[import("./modules/user/dto/user-base-input.dto"), { "UserBaseInputDto": { fullName: { required: true, type: () => String }, nickname: { required: false, type: () => String, nullable: true }, email: { required: true, type: () => String }, phone: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 8, maxLength: 64 } } }], [import("./modules/user/dto/create-one-user-input.dto"), { "CreateOneUserInputDto": {} }], [import("./modules/user/dto/user-base-output.dto"), { "UserBaseOutputDto": { id: { required: true, type: () => String }, fullName: { required: true, type: () => String }, nickname: { required: false, type: () => String, nullable: true }, email: { required: true, type: () => String }, phone: { required: true, type: () => String }, password: { required: true, type: () => String }, token: { required: true, type: () => String }, isActive: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date }, createdBy: { required: false, type: () => String, nullable: true }, updatedAt: { required: false, type: () => Date, nullable: true }, updatedBy: { required: false, type: () => String, nullable: true }, isActiveChangedAt: { required: false, type: () => Date, nullable: true }, isActiveChangedBy: { required: false, type: () => String, nullable: true } } }], [import("./modules/user/dto/create-one-user-output.dto"), { "CreateOneUserOutputDto": {} }], [import("./modules/user/dto/create-one-user-model.dto"), { "CreateOneUserModelDto": { id: { required: true, type: () => String }, isActive: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date }, createdBy: { required: false, type: () => String, nullable: true } } }], [import("./modules/user/dto/update-one-user-output.dto"), { "UpdateOneUserOutputDto": {} }], [import("./modules/user/dto/update-one-user-model.dto"), { "UpdateOneUserModelDto": { updatedAt: { required: true, type: () => Date }, updatedBy: { required: false, type: () => String, nullable: true } } }], [import("./modules/user/dto/delete-one-user-output.dto"), { "DeleteOneUserOutputDto": {} }], [import("./modules/user/dto/get-many-user-output.dto"), { "GetManyUserOutputDto": {} }], [import("./modules/user/dto/get-one-user-output.dto"), { "GetOneUserOutputDto": {} }], [import("./modules/user/dto/update-one-user-input.dto"), { "UpdateOneUserInputDto": { token: { required: false, type: () => String, nullable: true } } }], [import("./modules/auth/dto/sign-in-user-input.dto"), { "SignInUserInputDto": { email: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 8, maxLength: 64 } } }], [import("./modules/auth/dto/sign-in-user-output.dto"), { "SignInUserOutputDto": { token: { required: true, type: () => String } } }], [import("./modules/user/entities/user.entity"), { "UserEntity": { id: { required: true, type: () => String }, fullName: { required: true, type: () => String }, nickname: { required: false, type: () => String, nullable: true }, email: { required: true, type: () => String }, phone: { required: true, type: () => String }, password: { required: true, type: () => String }, token: { required: true, type: () => String }, isActive: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date }, createdBy: { required: false, type: () => String, nullable: true }, updatedAt: { required: false, type: () => Date, nullable: true }, updatedBy: { required: false, type: () => String, nullable: true }, isActiveChangedAt: { required: false, type: () => Date, nullable: true }, isActiveChangedBy: { required: false, type: () => String, nullable: true } } }]], "controllers": [[import("./modules/user/user.controller"), { "UserController": { "createOne": { type: t["./modules/user/dto/create-one-user-output.dto"].CreateOneUserOutputDto }, "getMany": { type: [t["./modules/user/dto/get-many-user-output.dto"].GetManyUserOutputDto] }, "getOneById": { type: t["./modules/user/dto/get-one-user-output.dto"].GetOneUserOutputDto }, "updateOneById": { type: t["./modules/user/dto/update-one-user-output.dto"].UpdateOneUserOutputDto }, "deleteOne": { type: t["./modules/user/dto/delete-one-user-output.dto"].DeleteOneUserOutputDto } } }], [import("./modules/auth/auth.controller"), { "AuthController": { "signInUser": { type: t["./modules/auth/dto/sign-in-user-output.dto"].SignInUserOutputDto } } }]] } };
};