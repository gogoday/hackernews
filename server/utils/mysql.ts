import mysql, { type PoolOptions, type Pool } from 'mysql2/promise';

let pool: Pool;

const config = useRuntimeConfig();

console.log(config);

function createMysqlPool() {
    pool = mysql.createPool({
        uri: config.mysqlConnectUrl,
        timezone: '+08:00',
        // todo
        debug: true,
        dateStrings: ['DATETIME']
    });
}

// 创建数据库连接池
createMysqlPool();

type dataItemType = string | number;

/**
 * 简单的mysql查询
 * @param sql 
 * @param data 
 * @returns 
 */
export async function useMysqlSimpleQuery(sql: string, data: dataItemType[]): Promise<any> {
    const connection = await pool.getConnection();
    const result = await connection.query(sql, data);
    connection.release()
    return result;
}