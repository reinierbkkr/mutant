package mutant.persistence;

import mutant.domain.Pattern;

import java.io.IOException;
import java.sql.*;

public class SQLitePatternStorage implements IPatternStorage {

    private Connection connection;

    public SQLitePatternStorage(String databaseName) {

        try {
            System.out.println(new java.io.File(".").getCanonicalPath());
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            connection = DriverManager.getConnection("jdbc:sqlite:" + databaseName);
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

//    // Create table if not exists
//    private void createTableIfNotExists() throws SQLException {
//        String sql = "CREATE TABLE IF NOT EXISTS main (" +
//                "name TEXT NOT NULL UNIQUE, " +
//                "pattern TEXT NOT NULL, " +
//                "PRIMARY KEY(name)" +
//                ")";
//        try (Statement stmt = connection.createStatement()) {
//            stmt.execute(sql);
//        }
//    }

    @Override
    public void storePattern(String name, Pattern pattern) {
        String sql = "INSERT INTO main (name, pattern) VALUES (?, ?)";
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setString(1, name);
            pstmt.setString(2, JSONProcessor.makeJSON(pattern));
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public Pattern getStoredPattern(String name) {
        String sql = "SELECT pattern FROM main WHERE name = ?";
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setString(1, name);
            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                return JSONProcessor.makePattern(rs.getString("pattern"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public String[] getPatternNames() {
        String sql = "SELECT name FROM main";
        try (Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(sql)) {
            ResultSetMetaData rsmd = rs.getMetaData();
            int columnsNumber = rsmd.getColumnCount();
            String[] names = new String[columnsNumber];
            int i = 0;
            while (rs.next()) {
                names[i++] = rs.getString("name");
            }
            return names;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void close() {
        try {
            if (connection != null) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
