import {
    getTechnology,
    postTechnology,
    getTechnologyById,
    updateTechnology,
} from '../services/index.js';
import {
    badrequest,
    created,
    notfound,
    ok,
} from '../handlers/response.handler.js';

const get = async (req, res, next) => {
    try {
        const data = await getTechnology(req.url.slice(1));
        ok(res, data);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const getById = async (req, res, next) => {
    const { params, url } = req;
    try {
        const data = await getTechnologyById(url.slice(1), params.id);
        if (data) {
            ok(res, data);
        } else {
            notfound(res);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const data = await getTechnology(req.url.slice(1));

        if (
            data.some(
                tech => tech.name.toLowerCase() === req.body.name.toLowerCase()
            )
        ) {
            badrequest(res, `${req.body.name} exists`);
            return;
        }

        await postTechnology(req.url.slice(1), req.body);
        created(res, `${req.body.name} created`);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const update = async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const data = await updateTechnology(body.spec, id, {
            id: body.data.id,
            name: body.data.name,
            amount: body.data.amount + 1,
        });
        if (data) {
            ok(res, data);
        } else {
            notfound(res);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};

export default {
    get,
    getById,
    create,
    update,
};
