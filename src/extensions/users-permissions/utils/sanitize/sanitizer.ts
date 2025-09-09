
import { curry } from 'lodash/fp';
import { traverseEntity, async } from '@strapi/utils';
import { removeUserRelationFromRoleEntities } from './visitors/index';

const sanitizeUserRelationFromRoleEntities = curry((schema, entity) => {
    // @ts-ignore
    return traverseEntity(removeUserRelationFromRoleEntities, { schema, getModel: strapi.getModel.bind(strapi) }, entity);
});

const defaultSanitizeOutput = curry((schema, entity) => {
    return async.pipe(sanitizeUserRelationFromRoleEntities(schema))(entity);
});

export default {
    sanitizeUserRelationFromRoleEntities,
    defaultSanitizeOutput,
};
