import MutationController from "apps/mutation_controller";
import type { ApiRouter } from "server/api/api_router";

class TaskController extends MutationController {
    static addRoutes(api_router: ApiRouter) {
        api_router.addRoute({
            method: "post",
            pattern: "/pattern1",
            controller: TaskController,
            action: "action1",
        });
        api_router.addRoute({
            method: "get",
            pattern: "/pattern2",
            controller: TaskController,
            action: "action2",
        });
    }
}